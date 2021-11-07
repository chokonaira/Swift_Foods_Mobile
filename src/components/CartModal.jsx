import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import CheckoutFormModal from "./CheckoutFormModal";
import { userProfile } from "../redux/actions/ProfileAction";
import { getShoppingBasket } from "../redux/actions/BasketAction";
import { connect } from "react-redux";
import {
  deleteBasketItem,
  deleteAllBasketItems,
} from "../redux/actions/BasketItemsAction";
import { loginUser } from "../redux/actions/LoginAction";

class CartModal extends Component {
  state = {
    modal: false,
  };

  openCheckoutModal = () => {
    this.setState({ modal: true });
  };
  closeCheckoutModal = () => {
    this.setState({ modal: false });
  };

  deleteCartItem = (basketItem) => {
    const {
      existingUser: {
        existingUser: { id, token },
      },
    } = this.props;
    const { id: basketItemId, basket_id } = basketItem;
    this.props.deleteBasketItem(id, basket_id, basketItemId, token);
  };

  clearBasketItems = () => {
    const {
      existingUser: {
        existingUser: { id, token },
      },
    } = this.props;
    const {
      basket: {
        basket: { id: basketId },
      },
    } = this.props.existingBasket;
    this.props.deleteAllBasketItems(id, basketId, token);
  };

  render() {
    const { modal } = this.state;
    const { shoppingBasket } = this.props;
    const add = (total, num) => total + parseInt(num.price);
    const totalPrice =
      shoppingBasket.basket.product &&
      shoppingBasket.basket.product.reduce(add, 0);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <Modal visible={this.props.openModal}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 22,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                backgroundColor: "#f0a500",
                padding: 10,
                marginBottom: 15,
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "#2c2828",
                  fontWeight: "bold",
                  paddingRight: 5,
                }}
              >
                Shopping Basket
              </Text>
              <Icon
                style={[{ color: "#2c2828" }]}
                size={20}
                name={"cart-arrow-down"}
              />
              <Icon
                onPress={this.props.closeModal}
                style={[{ left: 100, color: "#2c2828" }]}
                size={22}
                name={"arrow-right"}
              />
            </View>
            {shoppingBasket.basket.product &&
            shoppingBasket.basket.product.length === 0 ? (
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  No Item in Shopping Basket
                </Text>
              </View>
            ) : (
              <React.Fragment>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#2c2828",
                    }}
                  >
                    Total Payable: {totalPrice}Rwf{" "}
                  </Text>
                  <TouchableOpacity
                    onPress={this.openCheckoutModal}
                    style={{
                      alignItems: "center",
                      borderRadius: 3,
                      backgroundColor: "rgba(95, 197, 123, 1)",
                      flexDirection: "row",
                      paddingLeft: 3,
                      paddingRight: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "#fff",
                        padding: 7,
                      }}
                    >
                      Checkout
                    </Text>
                    <Icon
                      // onPress={this.props.closeModal}
                      // style={[{ left: 100, color: "#2c2828" }]}
                      size={14}
                      name={"check-circle"}
                    />
                  </TouchableOpacity>
                </View>
                <ScrollView style={GlobalStyles.cartModalScroolView}>
                  {shoppingBasket.basket.product &&
                    shoppingBasket.basket.product.map((cartItem, index) => {
                      const { basket_items } = shoppingBasket.basket;
                      return (
                        <View
                          key={index + 1}
                          style={{
                            marginBottom: 10,
                            borderRadius: 3,
                            alignItems: "center",
                            flexDirection: "row",
                            width: "95%",
                            backgroundColor: "#ececeb",
                            color: "black",
                            padding: 7,
                            borderStyle: "dashed",
                            borderWidth: 1,
                            borderColor: "black",
                          }}
                        >
                          <Text style={{ marginRight: 10, fontSize: 15 }}>
                            {index + 1}
                          </Text>

                          <View style={GlobalStyles.cartItemViewWrapper}>
                            <Image
                              style={GlobalStyles.cartItemViewImage}
                              source={{ uri: cartItem.image_url }}
                            />
                            <Text style={GlobalStyles.cartItemViewText}>
                              {" "}
                              {cartItem.name}{" "}
                            </Text>
                            <Text style={GlobalStyles.cartItemViewText2}>
                              {" "}
                              {cartItem.price}{" "}
                            </Text>
                          </View>
                          <Icon
                            onPress={() =>
                              this.deleteCartItem(basket_items[index])
                            }
                            style={GlobalStyles.cartItemViewIcon}
                            size={18}
                            name={"times"}
                          />
                        </View>
                      );
                    })}
                  <TouchableOpacity
                    onPress={this.clearBasketItems}
                    style={{
                      marginRight: 20,
                      alignSelf: "flex-end",
                      alignItems: "center",
                      borderRadius: 3,
                      backgroundColor: "#dd3e3e",
                      flexDirection: "row",
                      paddingLeft: 3,
                      paddingRight: 5,
                      width: "23%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "#fff",
                        padding: 7,
                      }}
                    >
                      Clear cart
                    </Text>
                    <Icon size={14} name={"check-circle"} />
                  </TouchableOpacity>
                </ScrollView>
              </React.Fragment>
            )}
          </View>
        </Modal>
        <CheckoutFormModal
          openCheckoutModal={modal}
          closeCheckoutModal={this.closeCheckoutModal}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  userProfile: state.userProfile,
  existingBasket: state.existingBasket,
  basketItems: state.basketItems,
});

export default connect(mapStateToProps, {
  userProfile,
  loginUser,
  getShoppingBasket,
  deleteBasketItem,
  deleteAllBasketItems,
})(CartModal);
