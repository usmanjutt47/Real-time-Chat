// screens/ChatScreen.jsx

import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import io from "socket.io-client";

const socket = io("http://192.168.10.10:5000"); // Replace with your server URL

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const handleSendMessage = () => {
    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={styles.message}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  message: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ChatScreen;
