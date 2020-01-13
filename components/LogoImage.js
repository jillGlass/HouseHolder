import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

const LogoImage = () => {
  return (
    <View style={styles.logo}>
    <Image source={require("../assets/images/undraw_welcome_3gvl.svg")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    height: 100
  }
});

export default LogoImage;
