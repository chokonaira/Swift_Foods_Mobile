import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { globalImages } from "../styles/globalImages";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";


class HeaderLogo extends Component {
  render() {
    return (
      <View style={{width: '100%', flexDirection: 'row', alignItems:'center', justifyContent: 'space-around'}}>
      
         {/* <Image style={{ width: 35, height: 35, borderRadius: 50}} source={globalImages.HeaderLogo}/> */}
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
          <View  style={{borderRadius: 5,marginLeft: 16,backgroundColor: '#f0a500', borderWidth:2,borderColor:'#2c2828', borderStyle:'dotted'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black', padding: 5}}>Swift Foods</Text>
          </View>
         </TouchableOpacity>

      </View>
    );
  }
}

export default HeaderLogo;
