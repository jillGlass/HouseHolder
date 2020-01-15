import React, { useState } from "react";
import { View, Modal, Button, StyleSheet } from "react-native";

const Allocation = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={style.allocationContainer}>
        <View style={styles.BeauButton}>
          <Text>Who is this job for?</Text>
          <Button title="Beau" onPress={props.onBeau} />
        </View>

        <View style={styles.MarchButton}>
          <Text>Who is this job for?</Text>
          <Button title="March" onPress={props.onMarch} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default Allocation;
