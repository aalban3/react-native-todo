import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text>
      <Text style={styles.boxFour}>Box 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 20,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 30,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "limegreen",
    padding: 10,
  },
  boxFour: {
    flex: 2,
    backgroundColor: "dodgerblue",
    padding: 40,
  },
});
