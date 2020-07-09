import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";


export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Change Text" />
    </View>
    </NativeRouter>
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
