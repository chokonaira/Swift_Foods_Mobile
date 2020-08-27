
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
import {fetchCategoriesByRestaurants} from '../redux/actions/RestaurantAction';



class Category extends Component {

  componentDidMount() {
    const { existingUser: { existingUser: { token }}} = this.props;
    this.props.fetchAllCategory(token)
    // this.props.fetchCategoriesByRestaurants(restaurantId, token)
  }

  render() {
    const { state } = this.props.navigation;
    console.log(state.params && state.params.restaurantId, 'restaurantId')
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
        <CategoryCard navigation={this.props.navigation} categories={this.props.categories}/>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  categories: state.categories,
  categoriesByRestaurant: state. categoriesByRestaurant
});


export default connect(mapStateToProps, {
  loginUser,
  fetchAllCategory,
  fetchCategoriesByRestaurants
})(Category);