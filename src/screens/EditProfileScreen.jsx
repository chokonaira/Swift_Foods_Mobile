import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import ProfileForm from "../components/ProfileFormModal";

class EdiitProfileScreen extends Component {
  render() {
    return (
      <View style={GlobalStyles.image}>
        <ProfileForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default EdiitProfileScreen;
