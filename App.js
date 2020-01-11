import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from "./components/JobInput";
import {
  StyleSheet,
  Text,
  View,
  Button,
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

  const removeJobHandler = jobId => {
    setAllJobs(currentJobs => {
      return currentJobs.filter((job) => job.id !== jobId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Job" onPress={}/>
      <JobInput onAddJob={addJobHandler}/>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allJobs}
        renderItem={itemData => <JobItem id={itemData.item.id} onDelete={removeJobHandler} title={itemData.item.value} />}
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
