import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import Button from "../components/Button";
import Banner from "../../assets/images/black-burger-banner.jpg";
import Logo from "../components/Logo";
import {Link} from "react-router-native"


export default function Home({ navigation }) {
  return (
    <ImageBackground style={styles.image} source={Banner}>
      <Logo />
      <Link style={styles.link} to="/login">
         <Button 
         text="Get Started" 
         onPress={() => navigation.navigate('Login')}
         />
      </Link>
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
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
    bottom: '12%'
  },
  link: {
    alignItems: "center",
    width: "100%",
    bottom: "9%",
  }
});
