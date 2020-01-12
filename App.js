import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from "./components/JobInput";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

export default function App() {
  const [allJobs, setAllJobs] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addJobHandler = jobTitle => {
    if (jobTitle.length === 0) {
      return
    }
    setAllJobs(currentJobs => [
      ...currentJobs,
      { id: Math.random().toString(), value: jobTitle }
    ]);
    setIsAddMode(false);
  };

  const removeJobHandler = jobId => {
    setAllJobs(currentJobs => {
      return currentJobs.filter(job => job.id !== jobId);
    });
  };

  const cancelJobAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Job" onPress={() => setIsAddMode(true)} />
      <JobInput
        visible={isAddMode}
        onAddJob={addJobHandler}
        onCancel={cancelJobAdditionHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allJobs}
        renderItem={itemData => (
          <JobItem
            id={itemData.item.id}
            onDelete={removeJobHandler}
            title={itemData.item.value}
          />
        )}
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
