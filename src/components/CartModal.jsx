import React, { Component } from "react";
import { View, TextInput, Text, Modal, Image } from "react-native";
import Header from "./Header";
import CartList from "./CartList";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
// import Image from "react-native-image-progress";
// import ProgressBar from "react-native-progress";
import { globalImages } from "../styles/globalImages";

class CartModal extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
        }}
      >
        <Modal
          // transparent={true}
          visible={this.props.openModal}
        >
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
                marginBottom: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "black",
                  fontWeight: "bold",
                  paddingRight: 10,
                }}
              >
                Your Basket
              </Text>
              <Icon style={[{}]} size={20} name={"cart-arrow-down"} />
              <Icon
                onPress={this.props.closeModal}
                style={[{ left: 100, color: "#fff" }]}
                size={22}
                name={"times"}
              />
            </View>

            <View style={{ borderRadius: 3,alignItems: "center", justifyContent:'space-around', borderWidth: .5, flexDirection:'row', width: "95%", backgroundColor: "#fff",color: "black", padding: 5, }}>
            <Text style={{ fontSize: 15}}>1</Text>
            <Image style={{borderRadius: 3,width:30, height:30}} source={globalImages.Passport} />
            <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "bold",color: "black" }}> Description </Text>
            <View style={{alignItems: "center", flexDirection: 'row', borderWidth: .5, justifyContent:'space-around',  width: "35%"}}>
              <Icon
                  onPress={this.props.closeModal}
                  style={[{ backgroundColor: "blue", paddingLeft: 3,paddingRight: 3, borderRadius: 3, color: "#fff" }]}
                  size={17}
                  name={"minus"}
                />
                <TextInput
                  // style={GlobalStyles.cartListInput}
                  style={{alignContent: "center", width: 20, height: 17, borderWidth: .5, justifyContent: 'center',backgroundColor:'#fff' ,fontSize:10}}
                  placeholder="1"
                  // onChangeText={props.handleChange("password")}
                  // value={props.values.password}
                  placeholderTextColor={"black"}
                  enablesReturnKeyAutomatically={true}
                />
                <Icon   
                  onPress={this.props.closeModal}
                  style={[{ backgroundColor: "#f0a500", paddingLeft: 3,paddingRight: 3, borderRadius: 3, color: "#fff" }]}

                  // style={[{ marginRight: 10 }]}
                  size={17}
                  name={"plus"}
                />
                <Icon   
                  onPress={this.props.closeModal}
                  style={[{ marginLeft: 7, backgroundColor: "red", paddingLeft: 3,paddingRight: 3, borderRadius: 3, color: "#fff" }]}
                  // style={[{ left: 100, color: "#fff" }]}
                  size={18}
                  name={"times"}
                />
            </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CartModal;
