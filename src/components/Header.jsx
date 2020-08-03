import React, { Component } from "react";
import { View, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Search from "./SearchBar";

class Header extends Component {
  render() {
    return <Text style={GlobalStyles.headerText}>{this.props.title}</Text>;
  }
}
export default Header;
