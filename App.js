import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from './components/JobInput'
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
  const [enteredJob, setEnteredJob] = useState("");
  const [allJobs, setallJobs] = useState([]);

  const jobInputHandler = enteredText => {
    setEnteredJob(enteredText);
  };

  const addJobHandler = () => {
    setallJobs(currentJobs => [
      ...currentJobs,
      { id: Math.random().toString(), value: enteredJob }
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Work We Do</Text>
<JobInput />
    

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allJobs}
        renderItem={itemData => <JobItem title={itemData.item.value}/>}
      />
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
