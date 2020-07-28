import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from "../styles/globalImages";
import { MaterialIcons } from "@expo/vector-icons";
import  Search from "./SearchBar";



class Header extends Component {
  render() {
    return (
      <React.Fragment>
       
        <View style={GlobalStyles.HeaderWrapper}>
          <Search  />
          {/* <Text style={GlobalStyles.searchBar}>Dashboard</Text> */}

        {/* <MaterialIcons
          name="menu"
          size={35}
          style={GlobalStyles.icons}
          color="#f0a500"
        /> */}
          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Image
              style={GlobalStyles.headerLogo}
              source={globalImages.HeaderLogo}
            />
          </TouchableOpacity> */}
        </View>
      </React.Fragment>
    );
  }
}
export default Header;
