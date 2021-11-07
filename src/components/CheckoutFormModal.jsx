import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/Fontisto";
import { globalImages } from "../styles/globalImages";

class CheckoutFormModal extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Modal visible={this.props.openCheckoutModal}>
            <View
              style={{
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
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f0a500",
                  padding: 10,
                  marginBottom: 3,
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
                  Checkout
                </Text>
                <Icon
                  style={[{ color: "#2c2828" }]}
                  size={20}
                  name={"shopping-bag-1"}
                />
                <Icon
                  onPress={this.props.closeCheckoutModal}
                  style={[{ left: 100, color: "#2c2828" }]}
                  size={18}
                  name={"arrow-right"}
                />
              </View>
              <View
                style={{
                  marginTop: 25,
                  height: "45%",
                  width: "90%",
                  padding: 5,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{
                    height: "70%",
                    width: "90%",
                    marginBottom: 10,
                    borderRadius: 0,
                  }}
                  source={globalImages.Card}
                />
                <TouchableOpacity
                  style={{
                    padding: 1,
                    flexDirection: "row",
                    backgroundColor: "#f0a500",
                    alignItems: "center",
                    alignSelf: "center",
                    width: "28%",
                    borderRadius: 5,
                  }}
                >
                  <Text style={GlobalStyles.profileTopButtonText}>
                    Add Card
                  </Text>
                  <Icon size={15} name={"credit-card"} />
                </TouchableOpacity>
              </View>
              <View style={GlobalStyles.editProfileFormWrapper}>
                <View style={GlobalStyles.editProfileForm}>
                  <TextInput
                    style={GlobalStyles.registerInput}
                    placeholder="Full Name"
                    placeholderTextColor={"black"}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                  />
                  <TextInput
                    style={GlobalStyles.registerInput}
                    placeholder="Delivery Address"
                    placeholderTextColor={"black"}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                  />
                  <TextInput
                    style={GlobalStyles.registerInput}
                    placeholder="Phone"
                    placeholderTextColor={"black"}
                    keyboardType={"numeric"}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                  />
                  <TouchableOpacity
                    style={GlobalStyles.loginTextSpanWrapper}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      marginTop: "5%",
                      backgroundColor: "#fff",
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "space-around",
                      width: "23%",
                      padding: 1,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={GlobalStyles.buttonText}>Pay</Text>
                    <Icon size={15} name={"credit-card"} />
                  </TouchableOpacity>
                  <Text style={GlobalStyles.emptyInput}></Text>
                  <Text style={GlobalStyles.emptyInput}></Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

export default CheckoutFormModal;
