import React, { Component } from "react";
import {
  ImageBackground,
  // TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard,
  Dimensions
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from "../styles/globalImages";
import Footer from "../components/Footer";
import Header from "../components/Header";

class DashboardScreen extends Component {
  render() {
    return (
        <ImageBackground
          style={GlobalStyles.image}
          source={globalImages.DashboardBanner}
        >
          {/* <Header /> */}

          <ScrollView>
            <View>
              <Text>Hello</Text>
            </View>
          </ScrollView>

          <Footer navigation={this.props.navigation} />
        </ImageBackground>
    );
  }
}

export default DashboardScreen;
