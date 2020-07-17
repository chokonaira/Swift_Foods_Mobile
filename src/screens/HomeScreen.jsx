import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground } from "react-native";
// import Button from "../components/Button";
import Banner from "../../assets/images/black-burger-banner.jpg";
import Logo from "../components/Logo";
import { Link } from "react-router-native";

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Login')
  }
  return (
    <ImageBackground style={styles.image} source={Banner}>
      <Logo />
      <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.button} onPress={pressHandler} >
        <Text style={styles.buttonText}> Explore Foods</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  text: {
    color: "#fff",
    padding: 30,
    width: "95%",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    bottom: "12%",
  },
  link: {
    alignItems: "center",
    width: "100%",
    bottom: "9%",
  },
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
