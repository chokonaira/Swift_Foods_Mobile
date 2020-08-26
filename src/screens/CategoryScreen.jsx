
import React, { Component } from 'react'
import {
  View,
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from "react-redux";
import { GlobalStyles } from "../styles/globalStyles";
import { fetchAllCategory } from "../redux/actions/CategoryAction";
import { userProfile } from "../redux/actions/ProfileAction";
import CategoryCard from "../components/CategoryCard"




class Category extends Component {

  componentDidMount() {
    const { existingUser: { existingUser: { token }}} = this.props;
    this.props.fetchAllCategory(token)
   

  }

  render() {
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
          textContent='Hold on..'
        />
        <CategoryCard categories={this.props.categories}/>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  categories: state.categories
});


export default connect(mapStateToProps, {
  userProfile,
  fetchAllCategory
})(Category);