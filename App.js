import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View>
    <TextInput placeholder='Enter Job' style={{borderBottomColor: 'black'}}/>
    <Button title='ADD'/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  
});
