
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import CategoryCard from "../components/CategoryCard"




class Category extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        <CategoryCard />
      </View>
    )
  }
}


export default Category;