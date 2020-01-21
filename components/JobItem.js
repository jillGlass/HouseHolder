import React from "react";
import { Text, TouchableOpacity } from "react-native";

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


export default JobItem;
