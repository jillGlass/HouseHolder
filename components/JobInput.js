import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal
} from "react-native";
import Allocation from "./Allocation";

const JobInput = props => {
  const [enteredJob, setEnteredJob] = useState("");
  const [isNameMode, setIsNameMode] = useState(false);
  const [selectColourBeau, setSelectColourBeau] = useState()
  const [selectColourMarch, setSelectColourMarch] = useState()


  const handleAllocationModal = () => {
    setIsNameMode(false);
  };

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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="red" title="CANCEL" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.addBtn}
              title="ADD"
              onPress={() => setIsNameMode(true)}

            />
          </View>
          <Allocation
            visible={isNameMode}
            onSelectName={handleAllocationModal}
            onEnteredJob={addJobHandler}
            style={styles.input}
            stateMarch={setSelectColourMarch}
            stateBeau={setSelectColourBeau}
          />
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
    alignItems: "center"
  },
  input: {
    width: "80%",
    backgroundColor: "#e3e8e5",
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
