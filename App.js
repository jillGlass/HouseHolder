import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from "./components/JobInput";
import Header from "./components/Header";
import Allocation from "./components/Allocation"
import LogoImage from "./components/LogoImage";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  StatusBar,
  SafeAreaView
} from "react-native";

const fetchFonts = () => {
  return Font.loadAsync({
    "alata-regular": require("./assets/fonts/Alata-Regular.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isNameMode, setIsNameMode] = useState(false);

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

  const handleAllocationModal = () => {
    setIsNameMode(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#bce8c8" }}>
      <View style={styles.mainContainer}>
        <View style={styles.StatusBar}>
          <StatusBar translucent barStyle="light-content" />
        </View>
        <View style={styles.screen}>
          <Header />
          <LogoImage />
          <Button
            style={styles.addBtn}
            title="Add New Job"
            onPress={() => setIsAddMode(true)}
          />
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
                onPress={() => setIsNameMode(true)}
                onDelete={removeJobHandler}
                title={itemData.item.value}
                style={styles.listItem}
              />
            )}
          />
          
        </View>
        <Allocation
            visible={isNameMode}
            onSelectName={handleAllocationModal}
            style={styles.listItem}
          />
      </View>
    </SafeAreaView>
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
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  inputs: {
    width: "100%"
  },
  listItem: {
    flex: 1,
    width: '100%',
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1,
    
  }
});
