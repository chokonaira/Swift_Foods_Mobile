import React from "react";
import {
  ImageBackground,
} from "react-native";
import Banner from "../../assets/images/black-burger-banner.jpg";
import Logo from "../components/Logo";
import Button from "../components/Button";
import {GlobalStyles} from "../styles/globalStyles"
export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground style={GlobalStyles.image} source={Banner}>
      <Logo />
      <Button onPress={pressHandler} title='Get Started'/>
    </ImageBackground>
  );
}