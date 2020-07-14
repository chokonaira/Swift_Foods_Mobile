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
    width: '100%',
    height: '100%',
    backgroundColor: '#FFffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 10
  }
});
