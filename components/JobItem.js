import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const JobItem = props => {
    return <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
}

const styles = StyleSheet.create({
    listItem: {
        width: "80%",
        padding: 10,
        marginTop: 10,
        backgroundColor: "lightgrey",
        borderColor: "black",
        borderWidth: 1
      }
})


export default JobItem