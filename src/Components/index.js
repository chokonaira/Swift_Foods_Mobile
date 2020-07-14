import React from './node_modules/react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "./node_modules/react-router-native";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Change Text" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFAE00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
