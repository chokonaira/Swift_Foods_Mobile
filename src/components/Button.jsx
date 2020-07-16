import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Button({text}) {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> {text}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#fff',
    padding: 13,
    width: '50%',
    borderRadius: 30,
    padding: 17,
    
  },
  buttonWrapper: {
    alignItems: 'center',
    width: '100%',
    bottom: '5%',
  },
  buttonText:{
    color: '#fff',
    fontSize: 17,
   fontWeight: 'bold',
  }
});
