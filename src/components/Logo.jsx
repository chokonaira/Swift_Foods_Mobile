import React from "react";
import { Image, View } from "react-native";
import swiftLogo from "../../assets/images/custom-logo.png";
import {GlobalStyles} from "../styles/globalStyles"

export default function Logo() {
  return (
    <View style={GlobalStyles.logoWrapper}>
      <Image style={GlobalStyles.logo} source={swiftLogo} />
    </View>
  );
}

