
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import RestaurantCard from "../components/RestaurantCard"


class Restaurant extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        <RestaurantCard />
      </View>
    )
  }
}


export default Restaurant;