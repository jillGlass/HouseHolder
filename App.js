import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredJob, setEnteredJob] = useState("");
  const [allJobs, setallJobs] = useState([]);

  const jobInputHandler = enteredText => {
    setEnteredJob(enteredText);
  };

  const addJobHandler = () => {
    setallJobs([...allJobs, enteredJob]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Job"
          style={styles.input}
          onChangeText={jobInputHandler}
          value={enteredJob}
        />
        <Button title="ADD" onPress={addJobHandler} />
      </View>
      <View>
        {allJobs.map((job) => <Text>{job}</Text>
        )}
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
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
