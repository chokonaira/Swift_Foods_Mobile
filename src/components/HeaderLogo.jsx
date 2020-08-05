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
         <View style={{borderRadius: 5,marginLeft: 16,backgroundColor: '#f0a500', borderWidth:2,borderColor:'black', borderStyle:'dotted'}}>
         <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black', padding: 5}}>Swift Foods</Text>

         </View>

      </View>
    );
  }
}

export default HeaderLogo;
