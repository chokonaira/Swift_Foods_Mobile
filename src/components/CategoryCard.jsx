import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
// import foodImage from "../styles/globalImages";
import { CategoryImages } from "../styles/globalImages";

class CategoryCard extends Component {
  componentDidMount() {
   
    this.props.categories;
  }

  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    
    const {
      categories: { categories },
    } = this.props.categories;
    // console.log(categories, "this.categories");
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          // width: "100%",
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
                  borderWidth: 0.7,
                  borderRadius: 3,
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

                <View style={{ backgroundColor: "rgba(240,165,0, 0.8)" }}>
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
