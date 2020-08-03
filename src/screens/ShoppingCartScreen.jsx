
import React, { Component } from 'react'
import {
  View
} from "react-native";
import Header from "../components/Header"
import { GlobalStyles } from "../styles/globalStyles";


class Cart extends Component {
  render() {
    return (
      <View
      style={GlobalStyles.image}
    >
      <Header title='Shopping Cart'/>
    </View>
    )
  }
}


export default Cart;