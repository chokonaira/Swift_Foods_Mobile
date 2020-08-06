import React, { Component } from "react";
import { View, TouchableOpacity, Text, Modal, TextInput, Image} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { globalImages } from "../styles/globalImages";
import { CartItems } from "../styles/globalImages";



class ProfileFormModal extends Component {
  
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
                justifyContent: "center",
                backgroundColor: "#fff",
                // padding: 10,
                // marginBottom: 15,
                // borderWidth: .5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  color: "#2c2828",
                  fontWeight: "bold",
                  // paddingRight: 10,
                }}
              >
                Edit your Profile
              </Text>
              <Icon
                onPress={this.props.closeModal}
                style={[{ left: 100, color: "#2c2828" }]}
                size={22}
                name={"arrow-right"}
              />
            </View>
            <View style={GlobalStyles.editProfileFormTop}>
              <Image
                style={GlobalStyles.profileAvartarImage}
                source={globalImages.Passport}
              />
              <TouchableOpacity
                style={{
                  
                  backgroundColor: "#f0a500",
                  alignItems: "center",
                  alignSelf: "center",
                  width: "35%",
                  borderRadius: 5,
                }}
              >
                <Text style={GlobalStyles.profileTopButtonText}>Change Image</Text>
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.editProfileFormWrapper}>
            <View style={GlobalStyles.editProfileForm}>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="First Name"
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
                      placeholder="Last Name"
                      // onChangeText={props.handleChange("last_name")}
                      // value={props.values.last_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    {/* <Text style={GlobalStyles.errorText}>
                      {props.touched.last_name && props.errors.last_name}
                    </Text> */}
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Email"
                      // onChangeText={props.handleChange("email")}
                      // value={props.values.email}
                      placeholderTextColor={"black"}
                      autoCapitalize="none"
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      keyboardType={"email-address"}
                    />
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
                      style={GlobalStyles.editProfileFormButton}
                      // onPress={props.handleSubmit}
                    >
                      <Text style={GlobalStyles.buttonText}>Submit</Text>
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
    );
  }
}

export default ProfileFormModal;
