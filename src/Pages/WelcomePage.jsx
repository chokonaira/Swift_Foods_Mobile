import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Salad from "../../assets/images/vegs.jpg"


export default function Welcome() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={Salad}/>
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
  image: {
    width: '5rem',
  }
});
