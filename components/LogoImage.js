import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";

const LogoImage = () => {
  return (
    <View >
    <Image style={styles.icon} source={require("../assets/trust.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    height: 60,
    marginBottom: 25

    
  }
});

export default LogoImage;
