import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import axios from "axios";

export default function ToDos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const { data: todo } = await axios.get("http://192.168.1.154:8080/todos");
      setTodos(todo);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchTodos();
    return () => {
      console.log("App will unmount");
    };
  }, []);

  const pressHandler = async (key) => {
    console.log(`pressed item: ${key}`);
    const { data: todo } = await axios.delete(
      `http://192.168.1.154:8080/todos/${key}`
    );
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id != todo.id);
    });
  };
  const submitHandler = async (newTodo) => {
    if (newTodo.length > 3) {
      const { data: todo } = await axios.post(
        "http://192.168.1.154:8080/todos",
        {
          description: newTodo,
        }
      );
      setTodos((prevTodos) => {
        return [...prevTodos, todo];
      });
    } else {
      Alert.alert("INVALID ENTRY!", "todos must be over 3 characters long");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 40,
    margin: 20,
  },
});
