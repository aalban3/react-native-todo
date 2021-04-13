import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function Main() {
  const message1 = "Welcome to my first React Native iOS app";
  const [name, setName] = useState("Alan");
  const [message, setMessage] = useState(message1);

  const handlePress = () => {
    setMessage("you pressed the button again!");
  };
  const handleTextChange = (value) => {
    setName(value);
  };
  return (
    <View>
      <Text>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={handleTextChange}
      />
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name}!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>{message}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update Message" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
