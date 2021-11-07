import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  TextInput,
  Image,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { globalImages } from "../styles/globalImages";

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
        <Modal visible={this.props.openModal}>
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
                justifyContent: "center",
                backgroundColor: "#fff",
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
                <Text style={GlobalStyles.profileTopButtonText}>
                  Change Image
                </Text>
              </TouchableOpacity>
            </View>
            <View style={GlobalStyles.editProfileFormWrapper}>
              <View style={GlobalStyles.editProfileForm}>
                <TextInput
                  style={GlobalStyles.registerInput}
                  placeholder="First Name"
                  placeholderTextColor={"black"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                />
                <TextInput
                  style={GlobalStyles.registerInput}
                  placeholder="Last Name"
                  placeholderTextColor={"black"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                />
                <TextInput
                  style={GlobalStyles.registerInput}
                  placeholder="Email"
                  placeholderTextColor={"black"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  keyboardType={"email-address"}
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
                <TouchableOpacity style={GlobalStyles.editProfileFormButton}>
                  <Text style={GlobalStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <Text style={GlobalStyles.emptyInput}></Text>
                <Text style={GlobalStyles.emptyInput}></Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ProfileFormModal;
