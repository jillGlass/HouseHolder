import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

const LogoImage = () => {
  return (
    <View style={styles.icon}>
    <Image source={require("../assets/trust.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
  }
});

export default LogoImage;
