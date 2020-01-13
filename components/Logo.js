import React from "react";
import { View, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image>source={require("../assets/undraw-welcome_3gvl.svg")}</Image>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100
  }
});

export default Logo;
