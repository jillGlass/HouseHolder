import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredJob, setEnteredJob] = useState("");
  const [allJobs, setallJobs] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0)

  const jobInputHandler = enteredText => {
    setEnteredJob(enteredText);
  };

  const addJobHandler = () => {
    setallJobs([...allJobs, enteredJob]);
  };

  const removeJobHandler = () => {
    //enter js that removes an item
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Work We Do</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Job"
          style={styles.input}
          onChangeText={jobInputHandler}
          value={enteredJob}
        />
         <Button title="ADD"
         style={styles.addBtn} 
         onPress={addJobHandler} />
      </View>
     
      <View>
        {allJobs.map(job => (
          <View key={job} style={styles.listItem}>
            <Text>{job}</Text>
            </View>
        ))}
        <Button title="X"
            style={styles.removeBtn}
            onPress={removeJobHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1
  },
  title: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 25
  },
  addBtn: {
    borderColor: "black",
    borderWidth: 1
  },
  removeBtn: {
    borderColor: "black",
    borderWidth: 1
  }
});
