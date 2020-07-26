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
        <View style={GlobalStyles.FooterWrapper}>
          <TouchableOpacity >
            <Image
              style={GlobalStyles.tinyIcon}
              source={globalImages.Foods}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={GlobalStyles.tinyIcon}
              source={globalImages.Hotel}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={GlobalStyles.tinyIcon}
              source={globalImages.Basket}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={GlobalStyles.tinyIcon}
              source={globalImages.Category}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={GlobalStyles.tinyIcon}
              source={globalImages.Profile}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default DashboardScreen;
