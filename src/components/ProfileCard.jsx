import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from "../styles/globalImages";

class ProfileCard extends Component {
  render() {
    return (
      <View style={GlobalStyles.image}>
        <View style={GlobalStyles.profitTop}>
          <Image
            style={GlobalStyles.profileAvartarImage}
            source={globalImages.Passport}
          />
          <TouchableOpacity style={GlobalStyles.profileButton}>
            <Text style={GlobalStyles.profileButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={GlobalStyles.profileBottom}>
          <View style={GlobalStyles.profileWrapper}>
            <Text>First Name: </Text>
            <Text>Henry </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text>Last Name: </Text>
            <Text>Okonkwo </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text>Email: </Text>
            <Text>okonkwo.henry2012@gmail.com </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text>Address: </Text>
            <Text>#6, 386 St, Kagarama </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text>Phone: </Text>
            <Text>+2348069537560 </Text>
          </View>

          {/* <Text>Last Name: <Text>Okonkwo </Text></Text>
        <Text>Email: <Text>okonkwo.henry2012@gmail.com</Text></Text>
        <Text>Address: <Text>#6, 386 St, Kagarama</Text></Text>
        <Text>Phone: <Text>+2348069537560</Text></Text> */}
        </View>
      </View>
    );
  }
}

export default ProfileCard;
