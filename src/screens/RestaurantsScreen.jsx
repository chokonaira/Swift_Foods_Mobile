
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from "react-redux";
import { GlobalStyles } from "../styles/globalStyles";
import { loginUser } from "../redux/actions/LoginAction";
import RestaurantCard from "../components/RestaurantCard"
import { fetchAllRestaurants } from "../redux/actions/RestaurantAction";



class Restaurant extends Component {

  componentDidMount() {
    const { existingUser: { existingUser: { token }}} = this.props;
    this.props.fetchAllRestaurants(token)
    // console.log(this.props, 'jjejjejjejjejej')
  }
  render() {
    const {loading} = this.props.restaurants;

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
          textContent='Fetching Restaurants...'
        />
        <RestaurantCard navigation={this.props.navigation} restaurants={this.props.restaurants}/>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  restaurants: state.restaurants
});

export default connect(mapStateToProps, {
  loginUser,
  fetchAllRestaurants
})(Restaurant);