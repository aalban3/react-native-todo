import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Todos from "./components/ToDos";
import Sandbox from "./components/Sandbox";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
