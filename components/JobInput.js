import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Slider
} from "react-native";

const JobInput = props => {
  const [enteredJob, setEnteredJob] = useState("");
  const jobInputHandler = enteredText => {
    setEnteredJob(enteredText);
  };

  const addJobHandler = () => {
    props.onAddJob(enteredJob);
    setEnteredJob("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Job"
          style={styles.input}
          onChangeText={jobInputHandler}
          value={enteredJob}
        />
        <Button title="CANCEL" color="red" />
        <Button title="ADD" style={styles.addBtn} onPress={addJobHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  }
});
export default JobInput;
