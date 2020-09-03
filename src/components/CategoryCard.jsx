import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";

class CategoryCard extends Component {

  render() {

    const {restaurantId} = this.props;
    let categories;
    if (restaurantId){
      categories = this.props.restaurant.restaurant.categories;
    } else {
      categories = this.props.categories.categories.categories;
    }
    if (categories && categories.length < 1){
     return (
     <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Text style={{fontWeight:'bold', fontSize: 15}}>There are currently no Categories </Text>
         <Text style={{fontWeight:'bold', fontSize: 15}}>for this Restaurant at the moment</Text>
      </View>)
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity 
              activeOpacity={0.5} 
              style={{ width: "33%" }}
              onPress={() => {
                this.props.navigation.navigate('Dashboard', {
                  categoryId: item.id,
                });
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: .5,
                  borderColor: "#f0a500",
                  margin: 0.8,
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
            </TouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
export default CategoryCard;
