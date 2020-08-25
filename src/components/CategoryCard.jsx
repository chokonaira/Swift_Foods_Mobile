import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
// import foodImage from "../styles/globalImages";
import { CategoryImages } from "../styles/globalImages";

class CategoryCard extends Component {
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
        // width: "100%",
      }}>
        <FlatList
          data={ CategoryImages}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{width: '33.2%'}}
            >
              <View >
                <Image
                  source={{ uri: item.categoryUrl }}
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
              <Text style={GlobalStyles.cardText}>Category</Text>
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
export default CategoryCard;
