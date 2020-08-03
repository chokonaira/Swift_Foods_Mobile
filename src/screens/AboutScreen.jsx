
import React, { Component } from 'react'
import {
  ImageBackground,
  // TextInput,
  // TouchableOpacity,
  View,
  Text,
  // KeyboardAvoidingView,
  ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
import { globalImages } from '../styles/globalImages'
import { GlobalStyles } from "../styles/globalStyles";


class AboutScreen extends Component {
  render() {
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.ProfileBanner}>
        {/* z */}
      </ImageBackground>
    )
  }
}


export default AboutScreen;