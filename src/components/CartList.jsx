import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
import { CategoryImages } from "../styles/globalImages";

class CartList extends Component {
  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    return (
      <View>
        <FlatList
          data={CategoryImages.category}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={this.GetListItem.bind(this, item.p_title)}
            >
              <View style={GlobalStyles.cartList}>
                <Image
                  source={{ uri: item.categoryUrl }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 50,
                    borderWidth: 0,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    margin: 9,
                    // justifyContent: "center",
                  }}
                />
                <View style={GlobalStyles.cartButtonWrapper}>
                  <TouchableOpacity style={GlobalStyles.cartListbutton}>
                    <Text style={GlobalStyles.cartListText}>+</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={GlobalStyles.cartListInput}
                    placeholder="99"
                    // onChangeText={props.handleChange("password")}
                    // value={props.values.password}
                    placeholderTextColor={"black"}
                    enablesReturnKeyAutomatically={true}
                  />
                  <TouchableOpacity style={GlobalStyles.cartListbutton}>
                    <Text style={GlobalStyles.cartListText}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={GlobalStyles.cartListbutton}>
                    <Text style={GlobalStyles.cartListText}>x</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          // numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
export default CartList;
