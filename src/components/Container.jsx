import React, { Component } from "react";
import {
  ImageBackground,
  // TextInput,
  // TouchableOpacity,
  View,
  Text,
  FlatList,
  // KeyboardAvoidingView,
  ScrollView,
  // TouchableWithoutFeedback,
  // Keyboard,
} from "react-native";
import { globalImages } from "../styles/globalImages";
import Footer from "../components/Footer";
import { GlobalStyles } from "../styles/globalStyles";
import { FlatList } from "react-native-gesture-handler";

class Container extends Component {
  render() {
    return (
      <View>
        <FlatList style={GlobalStyles.container}>
          <ScrollView>
            <View>
              <Text>Hello</Text>
            </View>
          </ScrollView>
          <Footer navigation={this.props.navigation} />
        </FlatList>
      </View>
    );
  }
}

export default Container;
