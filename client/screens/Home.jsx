// screens/Home.js

import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },
});

export default Home;
