import React, { Component } from "react";
import { View, TouchableOpacity, Text, Modal, Image } from "react-native";
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
                backgroundColor: "#fff",
                padding: 10,
                marginBottom: 15,
                borderWidth: .5, 
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
                style={[{ left: 100, color: "black" }]}
                size={22}
                name={"arrow-right"}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems:'center', marginBottom: 10,justifyContent:'space-between', width:'85%'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: 'black'}}>Total Payable: $5,000 </Text>
            <TouchableOpacity style={{borderRadius: 3,backgroundColor: '#1b6ca8'}}>
              <Text style={{fontWeight:'bold', fontSize: 12, color:'#fff', padding:7}}>Checkout</Text>
            </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 10,borderRadius: 3,alignItems: "center",flexDirection:'row', width: "95%", backgroundColor: "#f0a500",color: "black", padding: 7, }}>
              <Text style={{ marginRight: 10,fontSize: 15}}>1</Text>

              <View style={{ alignItems: "center", flexDirection: 'row', justifyContent:'space-between',  width: "88%"}}>
                <Image style={{borderRadius: 3,width:30, height:30}} source={globalImages.Passport} />
                <Text style={{ alignSelf:"center", fontSize: 12, fontWeight: "bold",color: "black" }}> Food Name </Text>
                <Text style={{  marginRight: 15, alignSelf:"center", fontSize: 12, fontWeight: "bold",color: "black" }}> $1500 </Text>
              </View>
              <Icon   
                    onPress={this.props.closeModal}
                    style={[{marginLeft: 5, backgroundColor: "red", paddingLeft: 3,paddingRight: 3, borderRadius: 5, color: "#fff" }]}
                    // style={[{ left: 100, color: "#fff" }]}
                    size={18}
                    name={"times"}
                  />
           
           
            </View>

            
            
          </View>
        </Modal>
      </View>
    );
  }
}

export default CartModal;
