import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <MaterialIcons
          name="delete"
          size={24}
          color="#333"
          onPress={() => pressHandler(item.id)}
        />
        <Text style={styles.text}> {item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  text: {
    marginLeft: 20,
  },
});
