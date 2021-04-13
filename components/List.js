import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import axios from "axios";

export default function List() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    try {
      const res = await axios.get("http://192.168.1.154:8080/person");
      setPeople(res.data);
    } catch (err) {
      console.log("error retrieving data", err);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <View style={styles.container}>
      <Text>People List</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.personName}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  personName: {
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
