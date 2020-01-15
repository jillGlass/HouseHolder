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

  const openModal=() => {
    this.setState({ modalVisible: true });
  }

  const closeModal=() => {
    this.setState({ modalVisible: false });
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Job"
          style={styles.input}
          onChangeText={jobInputHandler}
          value={enteredJob}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="red" title="CANCEL" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button style={styles.addBtn} title="ADD" onPress={addJobHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#bce8c8",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    backgroundColor: '#e3e8e5',
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
export default JobInput;
