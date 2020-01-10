import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from "./components/JobInput";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [allJobs, setAllJobs] = useState([]);

  const addJobHandler = jobTitle => {
    setAllJobs(currentJobs => [
      ...currentJobs,
      { id: Math.random().toString(), value: jobTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Work We Do</Text>
      <JobInput onAddJob={addJobHandler}/>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allJobs}
        renderItem={itemData => <JobItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  title: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 25
  },
  addBtn: {
    borderColor: "black",
    borderWidth: 1
  }
});
