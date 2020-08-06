import React, { Component } from "react";
import { View, TouchableOpacity, Text, Modal, Image, ScrollView, SafeAreaView} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { globalImages } from "../styles/globalImages";
import { CartItems } from "../styles/globalImages";



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
                marginBottom: 15,
                borderWidth: .5, 
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
                Your Basket
              </Text>
              <Icon style={[{ color: "#2c2828"}]} size={20} name={"cart-arrow-down"} />
              <Icon
                onPress={this.props.closeModal}
                style={[{ left: 100, color: "#2c2828" }]}
                size={22}
                name={"arrow-right"}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems:'center', marginBottom: 10,justifyContent:'space-between', width:'95%'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: '#2c2828'}}>Total Payable: $5,000 </Text>
            <TouchableOpacity style={{alignItems:'center',borderRadius: 3,backgroundColor: '#0c9463', flexDirection: 'row', paddingLeft:3, paddingRight:5}}>
              <Text style={{fontWeight:'bold', fontSize: 12, color:'#fff', padding:7}}>Checkout</Text>
              <Icon
                // onPress={this.props.closeModal}
                // style={[{ left: 100, color: "#2c2828" }]}
                size={14}
                name={"check-circle"}
              />
            </TouchableOpacity>
            </View>
            <ScrollView style={{width: '100%', marginLeft:15}}>
                {
                  CartItems.map((cartItem, index) => (
                    <View key={cartItem.id} style={{ marginBottom: 10,borderRadius: 3,alignItems: "center",flexDirection:'row', width: "95%", backgroundColor: "#ececeb",color: "black", padding: 7, borderStyle:'dashed', borderWidth:1, borderColor: 'black'}}>
                    <Text style={{ marginRight: 10,fontSize: 15}}>{index + 1}</Text>
      
                    <View style={{ alignItems: "center", flexDirection: 'row', justifyContent:'space-between',  width: "88%"}}>
                      <Image style={{borderRadius: 3,width:30, height:30}} source={{uri: cartItem.cartImage}} />
                      <Text style={{ alignSelf:"center", fontSize: 13, fontWeight: "bold",color: "black" }}> {cartItem.foodName} </Text>
                      <Text style={{  marginRight: 15, alignSelf:"center", fontSize: 13, fontWeight: "bold",color: "black" }}> {cartItem.price} </Text>
                    </View>
                    <Icon   
                          onPress={this.props.closeModal}
                          style={[{marginLeft: 5, backgroundColor: "red", paddingLeft: 3,paddingRight: 3, borderRadius: 5, color: "#fff" }]}
                          // style={[{ left: 100, color: "#fff" }]}
                          size={18}
                          name={"times"}
                        />
                 
                 
                  </View>
                  ))
                }
            </ScrollView>

            
            
          </View>
        </Modal>
      </View>
    );
  }
}

export default CartModal;
