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
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        width: "100%",
        // borderRadius:50
      }}>
        <FlatList
          data={RestaurantsImages}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{width: '49.8%', borderRadius:5}}
              // onPress={this.GetListItem.bind(this, item.p_title)}
            >
              <View >
                <Image
                  source={{ uri: item.restaurantUrl }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 40,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={GlobalStyles.flastList}
                />
              </View>
              <TouchableOpacity>
          <Text style={GlobalStyles.cardText}>Restaurant</Text>
        </TouchableOpacity>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
        
      </View>
    );
  }
}
export default RestaurantCard;
