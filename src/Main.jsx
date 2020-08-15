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
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
          <Navigator />
          <FlashMessage position="top" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser
})

// export default Main;
export default connect(mapStateToProps, {loginUser})(Main);
