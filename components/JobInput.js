import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet, Modal} from "react-native";


const JobInput = props => {
    const [enteredJob, setEnteredJob] = useState("");
    const jobInputHandler = enteredText => {
        setEnteredJob(enteredText);
      };
  return (
      <Modal visible={props.visible}>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Job"
        style={styles.input}
        onChangeText={jobInputHandler}
        value={enteredJob}
      />
      <Button title="ADD" style={styles.addBtn} onPress={() => props.onAddJob(enteredJob)} />
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  }  
})
export default JobInput
