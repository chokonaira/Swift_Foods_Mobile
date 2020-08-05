import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from "react-native";
import { globalImages } from "../styles/globalImages";
import { GlobalStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";


class HeaderLogo extends Component {
  render() {
    return (
      <View style={{width: '100%', flexDirection: 'row', alignItems:'center', justifyContent: 'space-around'}}>
        {/* <Icon
            onPress={()=> this.props.navigation.openDrawer()}
            style={[{ marginLeft: 10,
                      marginRight: 160 }]}
            size={20}
            name={"bars"}
          /> */}
         <Text style={{marginLeft: 10, marginRight: 85,fontWeight: 'bold', fontSize: 15, color: '#f0a500',  borderColor: 'black',backgroundColor: 'black' , padding: 3}}>Swift Foods</Text>
         <Image style={{ width: 35, height: 35, borderRadius: 50}} source={globalImages.HeaderLogo}/>

      </View>
    );
  }
}

export default HeaderLogo;
