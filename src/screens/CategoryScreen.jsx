
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from "react-redux";
import { GlobalStyles } from "../styles/globalStyles";
import { fetchAllCategory } from "../redux/actions/CategoryAction";
import { loginUser } from "../redux/actions/LoginAction";
import CategoryCard from "../components/CategoryCard"
import {fetchARestaurant} from '../redux/actions/RestaurantAction';
import {NavigationEvents} from 'react-navigation';


class Category extends Component {

  componentDidMount() {
    const { existingUser: { existingUser: { token }}} = this.props;
    this.props.fetchAllCategory(token)
  }

  getRestaurant = (restaurantId) => {
    const { existingUser: { existingUser: { token }}} = this.props;
    if(restaurantId){
      return this.props.fetchARestaurant(restaurantId, token)
    }
  }

  render() {
    const { state } = this.props.navigation;
    const restaurantId = state.params && state.params.restaurantId
    const {loading} = this.props.categories;
    return (
      <View
        style={GlobalStyles.image}
      >
        <Spinner
          animation="none"
          color='#f0a500'
          visible={loading}
          textStyle={{color: '#f0a500'}}
          overlayColor='rgba(0, 0, 0, .6)'
          textContent='Fetching Categories...'
        />
         <NavigationEvents onDidFocus={() => this.getRestaurant(restaurantId)} />
        <CategoryCard navigation={this.props.navigation} restaurantId={restaurantId} restaurant={this.props.restaurant} categories={this.props.categories}/>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  categories: state.categories,
  restaurant: state.restaurant
});


export default connect(mapStateToProps, {
  loginUser,
  fetchAllCategory,
  fetchARestaurant
})(Category);