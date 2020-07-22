import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";

export default function Link({ title, onPress }) {
  return (
    <React.Fragment>
      <TouchableOpacity style={GlobalStyles.loginTextWrapper} onPress={onPress}>
        <Text style={GlobalStyles.loginTextSpan}>{title}</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
}
