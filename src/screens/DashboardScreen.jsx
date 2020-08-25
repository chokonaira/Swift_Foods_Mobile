import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import FoodCard from "../components/FoodCard";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/LoginAction";
import { userProfile } from "../redux/actions/ProfileAction";
import { createShoppingBasket, getShoppingBasket } from "../redux/actions/BasketAction";

class DashboardScreen extends Component {
  async componentDidMount() {
    const { existingUser:{isAuthenticated} } = this.props;
    const { basket:{isBasketCreated} } = this.props;
    if (isAuthenticated) {
      const { existingUser: { existingUser: { id, token }}} = this.props;
      
      await this.props.userProfile(id, token);
        if(!isBasketCreated){
          await this.props.createShoppingBasket(id, token);
         console.log(isBasketCreated, 'yessssssss it was')
        }     
    }
  }

  componentDidUpdate() {
    const { basket:{isBasketCreated} } = this.props;
    if (isBasketCreated) {
      const { existingUser: { existingUser: { id, token }}} = this.props;
      const { basket: { basket: { id: basketId }}} = this.props;
      console.log(id, basketId, token , 'component updated')
      this.props.getShoppingBasket(id, basketId, token);
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
  basket: state.basket,
});

export default connect(mapStateToProps, {
  userProfile,
  loginUser,
  createShoppingBasket,
  getShoppingBasket
})(DashboardScreen);
