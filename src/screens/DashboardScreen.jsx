import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import FoodCard from "../components/FoodCard";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/LoginAction";
import { userProfile } from "../redux/actions/ProfileAction";
import { createShoppingBasket, getShoppingBasket } from "../redux/actions/BasketAction";

class DashboardScreen extends Component {
 componentDidMount() {
    const { existingUser:{isAuthenticated} } = this.props;
    const { createdBasket:{isBasketCreated} } = this.props;
    if (isAuthenticated) {
      const { existingUser: { existingUser: { id, token }}} = this.props;
      
      this.props.userProfile(id, token);
        if(!isBasketCreated){
         this.props.createShoppingBasket(id, token);
         console.log(isBasketCreated,'basket was created again');
         return
        }  
        const { createdBasket: { basket: { basket:{ id: basketId }}}} = this.props;
        this.props.getShoppingBasket(id, basketId, token);   
        console.log(isBasketCreated,'basket was fetched again instead');
    }
  }

  render() {
    return (
      <View style={GlobalStyles.dashboard}>
        <FoodCard />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  userProfile: state.userProfile,
  createdBasket: state.createdBasket,
  existingBasket: state.existingBasket
});

export default connect(mapStateToProps, {
  userProfile,
  loginUser,
  createShoppingBasket,
  getShoppingBasket
})(DashboardScreen);
