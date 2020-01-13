import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Header = () => {
  return (
    
    <Text style={styles.header}>HouseHolder</Text>
    
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
    fontSize: 30,
    color: 'grey',
    fontFamily: 'alata-regular',
    
  }
});

export default Header;