import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import FoodCard from "../components/FoodCard";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/LoginAction";
import { userProfile } from "../redux/actions/ProfileAction";
import { createShoppingBasket, getShoppingBasket } from "../redux/actions/BasketAction";
import Spinner from 'react-native-loading-spinner-overlay';
import { fetchAProductsByCategory } from "../redux/actions/CategoryAction";
import { fetchAllProducts } from "../redux/actions/ProductAction";



class DashboardScreen extends Component {
 componentDidMount() {
  // console.log(this.props,'this.popopopopopopopo');

    const { existingUser:{isAuthenticated} } = this.props;
    const { createdBasket:{isBasketCreated} } = this.props;
    if (isAuthenticated) {
      const { existingUser: { existingUser: { id, token }}} = this.props;
      this.props.fetchAllProducts(token)
      // this.props.fetchAProductsByCategory(1, token)
      this.props.userProfile(id, token);
        if(!isBasketCreated){
         this.props.createShoppingBasket(id, token);
         return
        }  
        const { createdBasket: { basket: { basket:{ id: basketId }}}} = this.props;
        this.props.getShoppingBasket(id, basketId, token);   
    }
  }

  render() {
    const {loading} = this.props.existingBasket;
    return (
      <View style={GlobalStyles.dashboard}>
        <Spinner
          animation="none"
          color='#f0a500'
          visible={loading}
          textStyle={{color: '#f0a500'}}
          overlayColor='rgba(0, 0, 0, .6)'
          textContent='Fetching Meals...'
        />
        <FoodCard productsByCategory={this.props.productsByCategory} allProducts={this.props.allProducts}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  userProfile: state.userProfile,
  createdBasket: state.createdBasket,
  existingBasket: state.existingBasket,
  productsByCategory: state.category,
  allProducts: state.products
});

export default connect(mapStateToProps, {
  userProfile,
  loginUser,
  createShoppingBasket,
  getShoppingBasket,
  fetchAProductsByCategory,
  fetchAllProducts
})(DashboardScreen);
