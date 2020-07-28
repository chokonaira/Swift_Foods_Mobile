import React, { Component } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from '../styles/globalImages';


class Footer extends Component {
  render() {
    return (
      <View style={GlobalStyles.FooterWrapper}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Image
            style={GlobalStyles.tinyIcon}
            source={globalImages.FoodsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Restaurant")}
        >
          <Image
            style={GlobalStyles.tinyIcon}
            source={globalImages.RestaurantsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Cart")}
        >
          <Image
            style={GlobalStyles.tinyIcon}
            source={globalImages.BasketIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Category")}
        >
          <Image
            style={GlobalStyles.tinyIcon}
            source={globalImages.CategoryIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Image
            style={GlobalStyles.tinyIcon}
            source={globalImages.ProfileIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Footer;
