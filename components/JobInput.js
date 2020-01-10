import React from "react";
import {View, TextInput, Button} from "react-native";


const JobInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Job"
        style={styles.input}
        onChangeText={jobInputHandler}
        value={enteredJob}
      />
      <Button title="ADD" style={styles.addBtn} onPress={addJobHandler} />
    </View>
  );
};

export default JobInput
