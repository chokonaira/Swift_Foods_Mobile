import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
import Icon from "react-native-vector-icons/FontAwesome5";
import { loginUser } from "../redux/actions/LoginAction";
import { createShoppingBasket } from "../redux/actions/BasketAction";
import { connect } from "react-redux";
import { foodImages } from "../styles/globalImages";

class FoodCard extends Component {
  state = {
    cart: []
  }

  openMenu = () => {
    // this.navigation.openDrawer();
  };

  addItem = () => {
    
  }
  render() {
    const {products:{products}} = this.props.allProducts;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          width: "100%",
        }}
      >
        <FlatList
        // style={{}}
          data={products}
          renderItem={({ item }) => (
            <View
            style={{width: '50%'}}
              activeOpacity={0.5}
              // onPress={this.GetListItem.bind(this, item.p_title)}
              >
              <View style={{borderWidth: .7, borderRadius: 3, borderColor: '#f0a500', margin: 1}} >

                <Image
                  source={{ uri: item.image_url }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 40,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={GlobalStyles.flastList}
                />
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', backgroundColor: 'rgba(240,165,0, 0.8)', padding: 3,width: '100%' }}>
                <View style={{marginLeft:10, width: '80%'}}>
                  <Text style={{fontWeight:'bold', fontSize:12,color:'black'}}>{item.name}</Text>
                  <Text style={{fontWeight:'bold', fontSize:10, color:'green'}}>Rwf: {item.price}</Text>
                  
                </View>
                <TouchableOpacity style={{marginRight:12}} >
                <Icon
                  // onPress={() => addItem()}
                  style={[{ color: 'black' }]}
                  size={20}
                  name={"cart-plus"}
                />
               </TouchableOpacity>
                </View>
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
