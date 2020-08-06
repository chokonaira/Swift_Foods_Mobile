
import React, { Component } from 'react'
import {
  View, TouchableOpacity, Text,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Header from "../components/Header"
import ProfileForm from "../components/ProfileFormModal"




class EdiitProfileScreen extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        {/* <Header title='Profile Details'/> */}
        <ProfileForm navigation={this.props.navigation}/>
       
      </View>
    )
  }
}


export default EdiitProfileScreen;