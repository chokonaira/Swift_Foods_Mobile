import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";

export default function Link({ title, onPress }) {
  return (
    <>
      <TouchableOpacity style={GlobalStyles.loginTextWrapper} onPress={onPress}>
        <Text style={GlobalStyles.loginText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
