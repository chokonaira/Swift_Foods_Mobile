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
  Dimensions,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from "../styles/globalImages";
import FoodCard from "../components/FoodCard";

class DashboardScreen extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
        // source={globalImages.DashboardBanner}
      >
        <FoodCard />
      </View>
    );
  }
}

export default DashboardScreen;
