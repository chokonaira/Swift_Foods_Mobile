
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
import Footer from "../components/Footer";
import { GlobalStyles } from "../styles/globalStyles";


class ProfileScreen extends Component {
  render() {
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.ProfileBanner}>
        <ScrollView>
          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation}/>
      </ImageBackground>
    )
  }
}


export default ProfileScreen;