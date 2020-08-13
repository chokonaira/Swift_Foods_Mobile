import React, { Component } from "react";
import Navigator from "./routes/RootRoutes";
import { YellowBox, StatusBar } from "react-native";
YellowBox.ignoreWarnings(["Remote debugger"]);
import { connect } from 'react-redux';
import FlashMessage from "react-native-flash-message";
import { loginUser } from './redux/actions/LoginAction';


class Main extends Component <{}>{
  componentDidMount() {
    // console.log(this.props, "this.props");
    // const {existingUser: {existingUser:{data: {token}}}} = this.props
    // console.log('---------------------------------------------------')
    // console.log(token, 'dataaaaa')
    // console.log('---------------------------------------------------')
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#f0a500" barStyle="default-content" />
          <Navigator />
          <FlashMessage position="top" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser
})

export default connect(mapStateToProps, {loginUser})(Main);
