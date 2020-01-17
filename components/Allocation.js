import React from "react";
import { View, Modal, Button, StyleSheet, Text } from "react-native";

const Allocation = props => {
  

  //1 open modal (via ADD button onPress within JobInput)
  //2 modal will show 'Who is this job for?' with 'Beau' and 'March' as options. (create modal, add logic for color to the modal)
  //3 on selection of name, modal will close and joblist will show. Each name will represent a different colour(add close modal on name button press)

const handleNamePress = () => {
  createJobList()
  closeAllocation()
}

  const createJobList = () => {
  props.onEnteredJob()
}

  const closeAllocation = () => { 
    props.onSelectName()
    // whichName(title)
  }

  // const whichName =(title) => {
  //     if(title === Beau) {
  //         //set color to green
  //     } else if (title === March) {
  //         //set color to purple
  //     }
  // }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.allocationContainer}>
        <Text>Who is this job for?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Beau" onPress={handleNamePress} />
          </View>
          <View style={styles.button}>
            <Button title="March" onPress={handleNamePress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  allocationContainer: {
    flex: 1,
    backgroundColor: "#bce8c8",
    justifyContent: "center",
    alignItems: "center"
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

export default Allocation;
