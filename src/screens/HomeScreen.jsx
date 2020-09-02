import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/LoginAction";
import { ImageBackground } from "react-native";
import { globalImages } from "../styles/globalImages";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Spinner from "react-native-loading-spinner-overlay";
import { GlobalStyles } from "../styles/globalStyles";

class Home extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.existingUser;
    if (isAuthenticated) {
      this.props.navigation.navigate("Dashboard");
    }
  }
  render() {
    const { isAuthenticated, loading } = this.props.existingUser;
    if (loading) {
      return (
        <Spinner
          animation="none"
          color="#f0a500"
          visible={loading}
          textStyle={{ color: "#f0a500" }}
          overlayColor="rgba(0, 0, 0, .6)"
        />
      );
    }
    return (
      <ImageBackground
        style={GlobalStyles.image}
        source={globalImages.HomeBanner}
      >
        <Logo />
        {isAuthenticated ? (
          <Button
            onPress={() => this.props.navigation.navigate("Dashboard")}
            title="Get Started"
          />
        ) : (
          <Button
            onPress={() => this.props.navigation.navigate("Login")}
            title="Get Started"
          />
        )}
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
});

export default connect(mapStateToProps, { loginUser })(Home);
