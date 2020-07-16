import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import Banner from "../../assets/images/login-banner.jpeg";
import Logo from "../components/Logo";

export default function Login() {
  return (
    <ImageBackground style={styles.image} source={Banner}>
      <Logo />
      {/* <Button text="Order Food" /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "red",
  //   color: "#fff",
  //   padding: 13,
  //   width: "50%",
  //   borderRadius: 30,
  //   padding: 17,
  // },
  // buttonWrapper: {
  //   alignItems: "center",
  //   width: "100%",
  //   bottom: "7%",
  // },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
