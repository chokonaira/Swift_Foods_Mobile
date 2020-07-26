
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
import { globalImages } from '../styles/globalImages'
import { GlobalStyles } from "../styles/globalStyles";
import Banner from "../../assets/images/dish-side.jpg";


class ProfileScreen extends Component {
  render() {
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.}>
        
      </ImageBackground>
    )
  }
}


export default ProfileScreen;