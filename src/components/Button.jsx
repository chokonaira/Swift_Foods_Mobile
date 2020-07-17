import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {GlobalStyles} from "../styles/globalStyles"

export default function Button({ title, onPress }) {
  return (
    <View style={GlobalStyles.buttonWrapper}>
      <TouchableOpacity style={GlobalStyles.button} onPress={onPress}>
        <Text style={GlobalStyles.buttonText}>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
}
