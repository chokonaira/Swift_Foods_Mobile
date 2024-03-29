import React, { Component } from "react";
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { userProfile } from "../redux/actions/ProfileAction";
import { globalImages } from '../styles/globalImages'
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import { registerSchema } from "../helpers/formValidationSchema";
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions/RegisterAction';
import { loginUser } from "../redux/actions/LoginAction";
import Spinner from 'react-native-loading-spinner-overlay';
import { logoutUser } from "../redux/actions/LogoutAction";

class Register extends Component {

  componentDidUpdate() {
     const { isRegistered } = this.props.newUser
      if(isRegistered) {
        this.props.navigation.navigate("Login");
    } 
  }


  checkAuthenticated = () => {
    const { isAuthenticated } = this.props?.existingUser;
    if (isAuthenticated) {
      const {
        userProfile
      } = this.props.profile;
      if (userProfile && userProfile.user === undefined) {
         this.onLogOut;
         return
      }
      this.props.navigation.navigate("Dashboard");
    }
  }

  onLogOut = () => {
    this.props.logoutUser();
    this.props.navigation.navigate('Home')
  }

  render() {
    const { loading } = this.props?.newUser;
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.RegisterBanner}>
        <Spinner
          animation="none"
          color='#f0a500'
          visible={loading}
          textStyle={{color: '#f0a500'}}
          overlayColor='rgba(0, 0, 0, .6)'

        />
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={60}>
          <ScrollView>
            <View style={GlobalStyles.authForm}>
            <Text style={GlobalStyles.authText}>Register</Text>

              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  password: "",
                }}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  this.props.registerUser(values);
                }}
              >
                {(props) => (
                  <View style={GlobalStyles.authFormInput}>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="First Name"
                      onChangeText={props.handleChange("first_name")}
                      value={props.values.first_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.first_name && props.errors.first_name}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Last Name"
                      onChangeText={props.handleChange("last_name")}
                      value={props.values.last_name}
                      placeholderTextColor={"black"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.last_name && props.errors.last_name}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Email"
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                      placeholderTextColor={"black"}
                      autoCapitalize="none"
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      keyboardType={"email-address"}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.email && props.errors.email}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Phone"
                      onChangeText={props.handleChange("phone")}
                      value={props.values.phone}
                      placeholderTextColor={"black"}
                      keyboardType={"numeric"}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.phone && props.errors.phone}
                    </Text>
                    <TextInput
                      style={GlobalStyles.registerInput}
                      placeholder="Password"
                      onChangeText={props.handleChange("password")}
                      value={props.values.password}
                      placeholderTextColor={"black"}
                      secureTextEntry={true}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.password && props.errors.password}
                    </Text>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("Login")}
                      style={GlobalStyles.loginTextSpanWrapper}
                    >
                      <Text style={GlobalStyles.registerTextSpan}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={GlobalStyles.formButton}
                      onPress={props.handleSubmit}
                    >
                      <Text style={GlobalStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={GlobalStyles.emptyInput}></Text>
                    <Text style={GlobalStyles.emptyInput}></Text>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  profile: state.userProfile,
  newUser: state.newUser
})

export default connect(mapStateToProps, {loginUser, registerUser, userProfile, logoutUser })(Register);
