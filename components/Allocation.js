import React from "react";
import { View, Modal, Button, StyleSheet, Text } from "react-native";

const Allocation = props => {

  const handleNamePressBeau = () => {
    closeAllocation();
    // whichName(title, props);
  };

  const handleNamePressMarch = () => {
    closeAllocation();
    // whichName(title, props);
  };

  

  const closeAllocation = () => {
    props.onSelectName();
  };

  //use useState to toggle colors instead of below?
  // const whichName = (title, props) => {
  //   if (title === "Beau") {
  //     props.style.backgroundColor = "#bb6be3";
  //   } else if (title === "March") {
  //     props.style.backgroundColor = "#e3a268";
  //   }
  // };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.allocationContainer}>
        <Text>Who is this job for?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Beau" onPress={() => handleNamePressBeau()} />
          </View>
          <View style={styles.button}>
            <Button title="March" onPress={() => handleNamePressMarch()} />
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
  },
  beauInput: {
    width: "80%",
    backgroundColor: "#bb6be3",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  },
  marchInput: {
    width: "80%",
    backgroundColor: "#e3a268",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5
  }
});

export default Allocation;
