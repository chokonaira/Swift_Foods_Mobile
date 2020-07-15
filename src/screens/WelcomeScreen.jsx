import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import Salad from "../../assets/images/black-burger-banner.jpg";
import Logo from "../components/Logo";

export default function Welcome() {
  return (
    <ImageBackground style={styles.image} source={Salad}>
      <Logo />
      <Button text="Get Started" />
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
  button: {
    alignItems: "center",
    backgroundColor: "red",
    color: "#fff",
    padding: 13,
    width: "50%",
    borderRadius: 30,
    padding: 17,
  },
  buttonWrapper: {
    alignItems: "center",
    width: "100%",
    bottom: "7%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
