import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const JobItem = props => {

  // add in logic to make listItem styles purple or green
  
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onLongPress={props.onDelete.bind(this, props.id)}
      style={styles.listItem}
      onPress={props.onPress}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    width: '100%',
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1,
    
  }
});

export default JobItem;
