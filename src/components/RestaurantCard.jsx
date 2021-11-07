import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";

class RestaurantCard extends Component {
  render() {
    const {
      restaurants: { hotels_restaurants },
    } = this.props.restaurants;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          width: "100%",
        }}
      >
        <FlatList
          data={hotels_restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ width: "49.8%" }}
              onPress={() => {
                this.props.navigation.navigate("Category", {
                  restaurantId: item.id,
                });
              }}
            >
              <View>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 1,
                    borderColor: "#f0a500",
                    margin: 1,
                  }}
                >
                  <Image
                    source={{ uri: item.image_url }}
                    indicator={ProgressBar}
                    indicatorProps={{
                      size: 40,
                      color: "rgba(150, 150, 150, 1)",
                      unfilledColor: "rgba(200, 200, 200, 0.2)",
                    }}
                    style={GlobalStyles.flastList}
                  />

                  <View style={{ backgroundColor: "#fffdf9" }}>
                    <Text style={GlobalStyles.cardText}>{item.name}</Text>
                  </View>
                </View>
              </View>
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
