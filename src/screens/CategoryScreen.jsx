
import React, { Component } from 'react'
import {
  ImageBackground,
  // TextInput,
  // TouchableOpacity,
  View,
  Text,
  // KeyboardAvoidingView,
  ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
import { globalImages } from '../styles/globalImages'
import { GlobalStyles } from "../styles/globalStyles";


class Category extends Component {
  render() {
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.CategoryBanner}>
        <ScrollView>
          <View>
            <Text>Hello</Text>
          </View>
        </ScrollView>
        {/* <Footer navigation={this.props.navigation}/> */}
      </ImageBackground>
    )
  }
}


export default Category;