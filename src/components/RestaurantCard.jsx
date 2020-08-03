import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
// import foodImage from "../styles/globalImages";
import { RestaurantsImages } from "../styles/globalImages";

class RestaurantCard extends Component {
  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    return (
      <>
        <FlatList
          data={RestaurantsImages.restaurant}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={this.GetListItem.bind(this, item.p_title)}
            >
              <View style={GlobalStyles.container}>
                <Image
                  source={{ uri: item.restaurantUrl }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 50,
                    borderWidth: 0,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={{
                    width: 180,
                    height: 150,
                    // alignSelf: "center",
                    margin: 9,
                    // justifyContent: "center",
                  }}
                />
              </View>
              <TouchableOpacity>
          {/* <Text style={GlobalStyles.cardText}>Add to Cart</Text> */}
        </TouchableOpacity>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        
      </>
    );
  }
}
export default RestaurantCard;
