
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Header from "../components/Header"



class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        <Header title='Profile Details'/>
      </View>
    )
  }
}


export default ProfileScreen;