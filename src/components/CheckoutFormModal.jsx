import React, { Component } from "react";
import { View, TouchableOpacity, Text, Modal, TextInput, Image, ScrollView} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/Fontisto";
import { globalImages } from "../styles/globalImages";
import { CartItems } from "../styles/globalImages";



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
        <Modal
          // transparent={true}
          visible={this.props.openModal}
        >
          <View
            style={{
              // flex: 1,
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
                Checkout
              </Text>
              <Icon style={[{ color: "#2c2828"}]} size={20} name={"shopping-bag-1"} />
              <Icon
                onPress={this.props.closeModal}
                style={[{ left: 100, color: "#2c2828" }]}
                size={18}
                name={"arrow-right"}
              />
            </View>
            <View style={{marginTop: 25,
                      height: "45%",
                      width: "90%",
                      padding:5,
                      // margin:10,
                      // backgroundColor: '#fff',
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: "flex-start",
                      // borderRadius: 50,
                      // borderWidth:1,
                     }}>
              <Image
                style={{ 
                height: "70%",
                width: "90%",
                marginBottom:10,
                borderRadius: 0,}}
                source={globalImages.Card}
              />
              <TouchableOpacity
                style={{
                  padding: 1,
                  flexDirection: 'row',
                  backgroundColor: "#f0a500",
                  alignItems: "center",
                  alignSelf: "center",
                  width: "28%",
                  borderRadius: 5,
                }}
              >
                <Text style={GlobalStyles.profileTopButtonText}>Add Card</Text>
                <Icon
                // onPress={this.props.closeModal}
                // style={[{ left: 100, color: "#2c2828" }]}
                size={15}
                name={"credit-card"}
              />
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.editProfileFormWrapper}>
            <View style={GlobalStyles.editProfileForm}>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Full Name"
                      // onChangeText={props.handleChange("first_name")}
                      // value={props.values.first_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    {/* <Text style={GlobalStyles.errorText}>
                      {props.touched.first_name && props.errors.first_name}
                    </Text> */}
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Delivery Address"
                      // onChangeText={props.handleChange("last_name")}
                      // value={props.values.last_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    {/* <Text style={GlobalStyles.errorText}>
                      {props.touched.last_name && props.errors.last_name}
                    </Text> */}
                    {/* <Text style={GlobalStyles.errorText}>
                      {props.touched.email && props.errors.email}
                    </Text> */}
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Phone"
                      // onChangeText={props.handleChange("phone")}
                      // value={props.values.phone}
                      placeholderTextColor={"black"}
                      keyboardType={"numeric"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    {/* <Text style={GlobalStyles.errorText}>
                      {props.touched.phone && props.errors.phone}
                    </Text> */}
                    
                    {/* <Text style={GlobalStyles.errorText}>
                      {props.touched.password && props.errors.password}
                    </Text> */}
                    <TouchableOpacity
                      // onPress={this.pressHandlerLogin}
                      style={GlobalStyles.loginTextSpanWrapper}
                    >
                      {/* <Text style={GlobalStyles.registerTextSpan}>Login</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ 
                      flexDirection: 'row',
                      marginTop: "5%",
                      backgroundColor: "#fff",
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent:'space-around',
                      width: "23%",
                      padding: 1,
                      borderRadius: 5,}}
                      // onPress={props.handleSubmit}
                    >
                      <Text style={GlobalStyles.buttonText}>Pay</Text>
                      <Icon
                        // onPress={this.props.closeModal}
                        // style={[{ left: 100, color: "#2c2828" }]}
                        size={15}
                        name={"credit-card"}
                      />
                    </TouchableOpacity>
                    <Text style={GlobalStyles.emptyInput}></Text>
                    <Text style={GlobalStyles.emptyInput}></Text>
                  </View>
              {/* <Text style={GlobalStyles.emptyInput}></Text>
              <TouchableOpacity
                onPress={() => {
                  navigate("ProfileForm", { go_back_key: state.key });
                }}
                style={GlobalStyles.profileBottomButton}
              >
                <Text style={GlobalStyles.profileBottomButtonText}>
                  Edit Details
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>
        
      </View>
      </ScrollView>
    );
  }
}

export default CheckoutFormModal;

