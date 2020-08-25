import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import ProfileCard from "../components/ProfileCard";

class ProfileScreen extends Component {
  render() {
    return (
      <View style={GlobalStyles.image}>
        <ProfileCard navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ProfileScreen;
