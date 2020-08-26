import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { userProfile } from "../redux/actions/ProfileAction";
import { createShoppingBasket, getShoppingBasket } from "../redux/actions/BasketAction";
import { loginUser } from "../redux/actions/LoginAction";
import CartModal from "./CartModal";
import { connect } from "react-redux";
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
    const {basket: { product }} = this.props.existingBasket

    return (
      <View style={{ paddingBottom: 13 }}>
        <CartModal products={product} openModal={modal} closeModal={this.closeModal} />
        <TouchableOpacity onPress={this.openModal}>
          <View style={GlobalStyles.shoppingCartNotification}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {product.length}
            </Text>
          </View>

          <Icon
            style={[{ marginRight: 13, color: "black" }]}
            size={20}
            name={"cart-arrow-down"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  userProfile: state.userProfile,
  createdBasket: state.createdBasket,
  existingBasket: state.existingBasket,
});
export default connect(mapStateToProps, {
  userProfile,
  loginUser,
  createShoppingBasket,
  getShoppingBasket,
})(ShoppingCartIcon);

