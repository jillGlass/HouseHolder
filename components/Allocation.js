import React from "react";
import { View, Modal, Button, StyleSheet, Text } from "react-native";

const Allocation = props => {
  

  //1 open modal (via ADD button onPress within JobInput) DONE
  //2 modal will show 'Who is this job for?' with 'Beau' and 'March' as options. DONE
  //3 on selection of name, modal will close DONE
  //4 logic = on selection of the name that job will show as a different color than the other name

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
