import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useGestureHandlerRef } from "react-navigation-stack";

class ShoppingCartIcon extends Component {
  render() {
    return (
      // <Text>Shopping Cart</Text>
      <View style={{ padding: 5 }}>
        <View
          style={GlobalStyles.shoppingCartNotification}
        >
          <Text style={{color:'#fff', fontWeight:'bold'}}>1</Text>
        </View>
        <TouchableOpacity>
        <Icon
          style={[{ marginRight: 13 }]}
          size={20}
          name={"cart-arrow-down"}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ShoppingCartIcon;
