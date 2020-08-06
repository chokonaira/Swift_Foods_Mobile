import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
// import foodImage from "../styles/globalImages";
import { foodImages } from "../styles/globalImages";

class FoodCard extends Component {
  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          width: "100%",
        }}
      >
        <FlatList
          data={foodImages}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={this.GetListItem.bind(this, item.p_title)}
            >
              <View style={GlobalStyles.container}>
                <Image
                  source={{ uri: item.foodUrl }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 40,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={{
                    width: 120,
                    height: 110,
                    margin: 4,
                  }}
                />
              </View>
              <TouchableOpacity>
          <Text style={GlobalStyles.cardText}>Add to Cart</Text>
        </TouchableOpacity>
            </TouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={(item) => item.id}
        />
        
      </View>
    );
  }
}
export default FoodCard;
