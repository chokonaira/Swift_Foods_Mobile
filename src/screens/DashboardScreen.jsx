import React, { Component } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import FoodCard from "../components/FoodCard";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/LoginAction";
import { userProfile } from "../redux/actions/ProfileAction";

class DashboardScreen extends Component {
  componentDidMount() {
    const { existingUser } = this.props;
    if (existingUser.isAuthenticated) {
      const {
        existingUser: {
          existingUser: { id, token },
        },
      } = this.props;
      this.props.userProfile(id, token);
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
});

export default connect(mapStateToProps, { userProfile, loginUser })(
  DashboardScreen
);
