import React, { Component } from "react";
import { View, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Search from "./SearchBar";

class Header extends Component {
  render() {
    return (
      <View style={GlobalStyles.headerWrapper}>
        <Text style={GlobalStyles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}
export default Header;
