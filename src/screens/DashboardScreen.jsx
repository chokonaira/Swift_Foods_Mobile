import React, { Component } from 'react'
import {
  ImageBackground,
  // TextInput,
  // TouchableOpacity,
  // View,
  // Text,
  // KeyboardAvoidingView,
  // ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
import Banner from "../../assets/images/rice-chicken.webp";


class DashboardScreen extends Component {
  render() {
    return (
      <ImageBackground style={GlobalStyles.image} source={Banner}>
        
      </ImageBackground>
    )
  }
}


export default DashboardScreen;