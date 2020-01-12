import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const JobItem = props => {
  return (
    
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.id)}
      style={styles.listItem}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1
  }
});

export default JobItem;
