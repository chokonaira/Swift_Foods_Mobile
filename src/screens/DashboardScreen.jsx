import React, { Component } from "react";
import {
  ImageBackground,
  // TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  // KeyboardAvoidingView,
  ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from '../styles/globalImages'
import Footer from "../components/Footer";

class DashboardScreen extends Component {
  render() {
   
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.DashboardBanner}>
        <ScrollView>
          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
        <Footer navigation={this.props.navigation}/>
      </ImageBackground>
    );
  }
}

export default DashboardScreen;
