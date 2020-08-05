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
         {/* <Image style={{ width: 35, height: 35, borderRadius: 50}} source={globalImages.HeaderLogo}/> */}
         <Text style={{marginLeft: 16,fontWeight: 'bold', fontSize: 12, color: '#f0a500', borderWidth:1, borderColor: 'black',backgroundColor: 'black' , padding: 5}}>Swift Foods</Text>

      </View>
    );
  }
}

export default HeaderLogo;
