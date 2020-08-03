
import React, { Component } from 'react'
import {
  View
} from "react-native";
import Header from "../components/Header"
import CartList from "../components/CartList"
import { GlobalStyles } from "../styles/globalStyles";


class Cart extends Component {
  render() {
    return (
      <View
      style={GlobalStyles.image}
    >
      <Header title='Shopping Cart'/>
      <CartList/>
    </View>
    )
  }
}


export default Cart;