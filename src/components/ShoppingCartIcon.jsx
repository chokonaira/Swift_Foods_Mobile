import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import CartModal from "./CartModal";
import { CartItems } from "../styles/globalImages";

class ShoppingCartIcon extends Component {
  state = {
    modal: false,
  };

  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  render() {
    const { modal } = this.state;
    return (
      <View style={{ paddingBottom: 13 }}>
        <CartModal openModal={modal} closeModal={this.closeModal} />
        <TouchableOpacity onPress={this.openModal}>
          <View style={GlobalStyles.shoppingCartNotification}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {CartItems.length}
            </Text>
          </View>

          <Icon
            style={[{ marginRight: 13, color: "#474744" }]}
            size={20}
            name={"cart-arrow-down"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ShoppingCartIcon;
