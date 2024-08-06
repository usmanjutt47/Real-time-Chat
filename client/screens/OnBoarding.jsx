// screens/OnBoarding.js

import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const OnBoarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App</Text>
      <Text style={styles.subtitle}>
        Discover amazing features and enjoy our services.
      </Text>
      <Button title="Get Started" onPress={() => navigation.navigate("Home")} />
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
  subtitle: {
    fontSize: width * 0.05,
    textAlign: "center",
    marginBottom: height * 0.05,
  },
});

export default OnBoarding;
