import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const JobItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete} style={styles.listItem}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "80%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1
  }
});

export default JobItem;
