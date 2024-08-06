// screens/ChatScreen.js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import io from "socket.io-client";

const { width, height } = Dimensions.get("window");

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = io("http://localhost:3000"); // Replace with your server URL

  useEffect(() => {
    socket.on("receive_message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = { text: message, sender: "user" }; // Replace with actual sender info
      socket.emit("send_message", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messagesList}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: width * 0.05,
  },
  messagesList: {
    flex: 1,
  },
  messageContainer: {
    padding: width * 0.02,
    marginBottom: height * 0.02,
    backgroundColor: "#e1e1e1",
    borderRadius: 8,
  },
  messageText: {
    fontSize: width * 0.04,
  },
  input: {
    height: height * 0.06,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.02,
  },
});

export default ChatScreen;
