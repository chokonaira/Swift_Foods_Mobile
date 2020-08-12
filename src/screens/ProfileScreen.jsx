
import React, { Component } from 'react'
import {
  View, TouchableOpacity, Text,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"




class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        <ProfileCard navigation={this.props.navigation}/>
       
      </View>
    )
  }
}


export default ProfileScreen;