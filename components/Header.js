import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Header = () => {
  return (
    <View>
    <Text style={styles.header}>HouseHolder</Text>
    <Text style={styles.subHeader}>Beau and March's chores!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 5,
    fontSize: 32,
    color: 'grey',
    fontFamily: 'alata-regular',
  },
  subHeader: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    fontSize: 18,
    color: 'grey',
    fontFamily: 'alata-regular',
  }
});

export default Header;