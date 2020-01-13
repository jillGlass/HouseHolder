import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from "./components/JobInput";
import Header from "./components/Header";
import LogoImage from "./components/LogoImage";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  StatusBar
} from "react-native";
import Constants from "expo-constants";


const fetchFonts = () => {
  return Font.loadAsync({
    "alata-regular": require("./assets/fonts/Alata-Regular.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const addJobHandler = jobTitle => {
    if (jobTitle.length === 0) {
      return;
    }
    setAllJobs(currentJobs => [
      ...currentJobs,
      { id: Math.random().toString(), value: jobTitle }
    ]);
    setIsAddMode(false);
  };

  const removeJobHandler = jobId => {
    setAllJobs(currentJobs => {
      return currentJobs.filter(job => job.id !== jobId);
    });
  };

  const cancelJobAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="light-content" />

        <View style={styles.screen}>
          <Header />
          <LogoImage />
          <Button title="Add New Job" onPress={() => setIsAddMode(true)} />
          <JobInput
            visible={isAddMode}
            onAddJob={addJobHandler}
            onCancel={cancelJobAdditionHandler}
          />

          <FlatList
            keyExtractor={(item, index) => item.id}
            data={allJobs}
            style={styles.inputs}
            renderItem={itemData => (
              <JobItem
                id={itemData.item.id}
                onDelete={removeJobHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#bce8c8",
    justifyContent: "center",
    alignItems: "center"
  },
  StatusBar: {
    backgroundColor: "#bce8c8"
  },
  screen: {
    padding: 40,
    marginTop: 50
  },
  title: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 25
  },
  addBtn: {
    borderColor: "black",
    borderWidth: 1
  }
});
