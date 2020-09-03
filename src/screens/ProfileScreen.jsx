import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { connect } from 'react-redux';
import { loginUser } from "../redux/actions/LoginAction";
import { userProfile } from "../redux/actions/ProfileAction";
// import {NavigationEvents} from 'react-navigation';
import ProfileCard from "../components/ProfileCard";
import { logoutUser } from "../redux/actions/LogoutAction";

class ProfileScreen extends Component {


  // checkAuthenticated = () => {
  //   const { isAuthenticated } = this.props.existingUser;
  //   if (isAuthenticated) {
  //     const {
  //       userProfile
  //     } = this.props.profile;
  //     if (userProfile && userProfile.user === undefined) {
  //       this.onLogOut;
  //     }
  //   }
  // }

  onLogOut = () => {
    this.props.logoutUser();
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={GlobalStyles.image}>
        {/* <NavigationEvents onDidFocus={this.checkAuthenticated} /> */}
        <ProfileCard navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  profile: state.userProfile,
})

export default connect(mapStateToProps, {loginUser, logoutUser, userProfile})(ProfileScreen);