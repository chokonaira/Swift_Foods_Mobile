
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Header from "../components/Header"
import CategoryCard from "../components/CategoryCard"




class Category extends Component {
  render() {
    return (
      <View
        style={GlobalStyles.image}
      >
        <Header title='Meal Categories'/>
        <CategoryCard />
      </View>
    )
  }
}


export default Category;