import React from "react";
import {
  ImageBackground,
} from "react-native";
import {globalImages} from '../styles/globalImages';
import Logo from "../components/Logo";
import Button from "../components/Button";
import {GlobalStyles} from "../styles/globalStyles";
import {clearAllData} from '../redux/actions/AsyncStorageAction';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground style={GlobalStyles.image} source={globalImages.HomeBanner}>
      <Logo />
      <Button onPress={clearAllData} title='Get Started'/>
      {/* <Button onPress={pressHandler} title='Get Started'/> */}
    </ImageBackground>
  );
}