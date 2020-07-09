import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Hello, Welcome to CHOKO swift Foods </Text>
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
