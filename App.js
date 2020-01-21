import React, { useState } from "react";
import JobItem from "./components/JobItem";
import JobInput from "./components/JobInput";
import Header from "./components/Header";
import Allocation from "./components/Allocation";
import LogoImage from "./components/LogoImage";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import _ from "lodash";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  StatusBar,
  SafeAreaView
} from "react-native";

// font loader
const fetchFonts = () => {
  return Font.loadAsync({
    "alata-regular": require("./assets/fonts/Alata-Regular.ttf")
  });
};

// useState hooks
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false); // for Expo
  const [allJobs, setAllJobs] = useState([]); //all jobs set and listed
  const [isAddMode, setIsAddMode] = useState(false); //Job input modal state
  const [isNameMode, setIsNameMode] = useState(false); // Allocation modal state
  const [currentJobId, setCurrentJobId] = useState(null); // Id for Allocation of jobs to kids

  // for Expo
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const setIsMarchColor = id => {
    const job = _.find(allJobs, job => job.id === id); //get all jobs, split into each job. Match id of allocated job.
    if (job) job.owner = "March";
    setAllJobs(allJobs);
    setIsAddMode(false);
  };

  const setIsBeauColor = id => {
    const job = _.find(allJobs, job => job.id === id);
    if (job) job.owner = "Beau";
    setAllJobs(allJobs);
    setIsAddMode(false);
  };

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
                onPress={() => {
                  setIsNameMode(true);
                  setCurrentJobId(itemData.item.id);
                }}
                onDelete={removeJobHandler}
                title={itemData.item.value}
                style={
                  itemData.item.owner
                    ? itemData.item.owner === "Beau"
                      ? styles.beauItem
                      : styles.marchItem
                    : styles.listItem
                }
              />
            )}
          />
        </View>
        <Allocation
          visible={isNameMode}
          onSelectName={() => setIsNameMode(false)}
          style={styles.listItem}
          setIsMarchColor={setIsMarchColor}
          setIsBeauColor={setIsBeauColor}
          jobId={currentJobId}
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
    width: "100%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightgrey",
    borderColor: "black",
    borderWidth: 1
  },
  beauItem: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 1
  },
  marchItem: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop: 10,
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 1
  }
});
