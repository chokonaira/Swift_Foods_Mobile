import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";


class HeaderLogo extends Component {

  render() {
    return (
      <View style={{width: '100%', flexDirection: 'row', alignItems:'center', justifyContent: 'space-around'}}>
      
         <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
          <View  style={{borderRadius: 5,marginLeft: 16,backgroundColor: '#f0a500'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff', padding: 5}}>Swift Foods</Text>
          </View>
         </TouchableOpacity>

      </View>
    );
  }
}

export default HeaderLogo;
