import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../styles/globalStyles";


class Footer extends Component {

  openMenu = () => {
    // this.navigation.openDrawer();
  }

  render() {
    return (
      <View style={GlobalStyles.header}>
        <View>
          <Text style={GlobalStyles.headerText}>Dashboard</Text>
        </View>
      </View>
    )
  }
}
export default Footer;
