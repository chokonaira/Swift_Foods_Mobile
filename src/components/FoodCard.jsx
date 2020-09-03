import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
import Icon from "react-native-vector-icons/FontAwesome5";
import { loginUser } from "../redux/actions/LoginAction";
import { getShoppingBasket } from "../redux/actions/BasketAction";
import { connect } from "react-redux";
import { addBasketItem, deleteBasketItem } from "../redux/actions/BasketItemsAction";

class FoodCard extends Component {
  state = {
    color: 'green'
  }

  addItem = (payload) => {
    const { existingUser: { existingUser: { id, token }}} = this.props;
    this.props.addBasketItem(id, payload, token)
  }

  render() {

    const {basket} = this.props.existingBasket
    const basketId = basket.basket && basket.basket.id
    const {categoryId} = this.props;
    
    let products 
    if (categoryId) {
    products = this.props.category.category.products
    } else { 
    products = this.props.allProducts.products.products
    }

    
    if (products && products.length < 1){
      return (
      <View
         style={{
           flex: 1,
           justifyContent: "center",
           alignItems: "center",
           marginTop: 2,
         }}
       >
         <Text style={{fontWeight:'bold', fontSize: 15}}>There are currently no Products </Text>
         <Text style={{fontWeight:'bold', fontSize: 15}}>for this category at the moment</Text>

       </View>)
     }

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
          data={products}
          renderItem={({ item }) => (
            <View
            style={{width: '50%'}}
              activeOpacity={0.5}
              // onPress={this.GetListItem.bind(this, item.p_title)}
              >
              <View style={{borderWidth: 1, borderRadius: 3, borderColor: '#f0a500', margin: 1}} >

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
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', backgroundColor: '#fffdf9', padding: 3,width: '100%' }}>
                <View style={{marginLeft:10, width: '80%'}}>
                  <Text style={{fontWeight:'bold', fontSize:12,color:'black'}}>{item.name}</Text>
                  <Text style={{fontWeight:'bold', fontSize:10, color:'green'}}>Rwf: {item.price}</Text>
                  
                </View>
                <TouchableOpacity style={{marginRight:15}} onPress={() => this.addItem({basket_id: basketId, product_id: item.id, quantity:1})}>
                <Icon
                  style={{color: 'black'}}
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
  existingUser: state.existingUser,
  userProfile: state.userProfile,
  existingBasket: state.existingBasket,
  basketItems: state.basketItems
});

export default connect(mapStateToProps, {
  loginUser,
  getShoppingBasket,
  addBasketItem,
  deleteBasketItem
})(FoodCard);
