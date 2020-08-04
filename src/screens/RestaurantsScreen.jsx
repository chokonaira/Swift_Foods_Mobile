
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import RestaurantCard from "../components/RestaurantCard"
import Header from "../components/Header"


class Restaurant extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        <Header title='Restaurants'/>
        <RestaurantCard />
      </View>
    )
  }
}


export default Restaurant;