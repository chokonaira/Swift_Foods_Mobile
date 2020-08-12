import React, { Component } from "react";
import {
  View
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import FoodCard from "../components/FoodCard";
import Header from "../components/Header"

class DashboardScreen extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.dashboard}
      >
        <FoodCard />
      </View>
    );
  }
}

export default DashboardScreen;
