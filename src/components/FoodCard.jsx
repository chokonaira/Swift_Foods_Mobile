import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
import Icon from "react-native-vector-icons/FontAwesome5";
import { loginUser } from "../redux/actions/LoginAction";
import Iconik from "react-native-vector-icons/Ionicons";
import { createShoppingBasket } from "../redux/actions/BasketAction";
import { connect } from "react-redux";


// import foodImage from "../styles/globalImages";
import { foodImages } from "../styles/globalImages";

class FoodCard extends Component {
  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          // width: "100%",
        }}
      >
        <FlatList
        // style={{}}
          data={foodImages}
          renderItem={({ item }) => (
            <View
            style={{width: '50%'}}
              activeOpacity={0.5}
              // onPress={this.GetListItem.bind(this, item.p_title)}
              >
                <Image
                  source={{ uri: item.foodUrl }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 40,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={GlobalStyles.flastList}
                />
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <View>
                  <Text style={{fontWeight:'bold', fontSize:13,color:'rgba(95, 197, 123, 1)'}}>Salad peperoni </Text>
                  <Text style={{fontWeight:'bold', fontSize:12, color:'#2c2828'}}>Fwr 5000 </Text>
                  
                </View>
                <TouchableOpacity >
                <Icon
                  onPress={() => addItem()}
                  style={[{ color: '#474744',  }]}
                  size={20}
                  name={"cart-plus"}
                />
               </TouchableOpacity>
                </View>
              
            </View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
        
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  basket: state.basket,
});

export default connect(mapStateToProps, {
  loginUser,
  createShoppingBasket,
})(FoodCard);
