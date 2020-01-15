import React, { useState } from "react";
import { View, Modal, Button, StyleSheet } from "react-native";

const Allocation = props => {
  const [selectedName, setSelectedName] = useState("");

  //1 open modal (via ADD onPress(addJobHandler))
  //2 modal will show 'Who is this job for?' with 'Beau' and 'March' as options() (create modal, add logic for color to the modal)
  //3 on selection of name, modal will close and joblist will show. Each name will represent a different colour(add close modal on name button press)

  const onBeau = props => {};

  const onMarch = props => {};

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.allocationContainer}>
        <Text>Who is this job for?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Beau" onPress={props.onBeau} />
          </View>
          <View style={styles.button}>
            <Button title="March" onPress={props.onMarch} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
  allocationContainer: {},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default Allocation;
