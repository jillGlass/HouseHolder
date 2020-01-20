import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const JobItem = props => {
  
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onLongPress={props.onDelete.bind(this, props.id)}
      style={props.style}
      onPress={props.onPress}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

// add inline style to TouchableOpacity.  If beau = green : march = red
//className={this.toggleColor(bird)}

export default JobItem;
