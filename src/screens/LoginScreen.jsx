import React, { Component } from "react";
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalImages } from '../styles/globalImages'
import { connect } from 'react-redux';
import { GlobalStyles } from "../styles/globalStyles";
import { userProfile } from "../redux/actions/ProfileAction";
import Spinner from 'react-native-loading-spinner-overlay';
import { loginUser } from '../redux/actions/LoginAction';
import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";
import { loginSchema } from "../helpers/formValidationSchema";

class Login extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.existingUser;
    if (isAuthenticated) {
      const {
        userProfile
      } = this.props.profile;
      if (userProfile && userProfile.user === undefined) {
        return this.onLogOut;
      }
      this.props.navigation.navigate("Dashboard");
    }
  }

  componentDidUpdate() {
    const { existingUser: {isAuthenticated, isError }} = this.props
     if(isAuthenticated) {
       showMessage({
         message: "Login succesfull",
         type: "success",
         style: {alignContent: 'center', justifyContent:'center'} 
       }); 
       this.props.navigation.navigate("Dashboard");
   } else if(isError){
     showMessage({
       message: "Opps something went wrong, try again",
       type: "danger",
     });
   }
 }
  render() {
    const { existingUser: { loading }} = this.props
    return (
      <ImageBackground style={GlobalStyles.image} source={globalImages.LoginBanner}>
        <Spinner
          animation="none"
          color='#f0a500'
          visible={loading}
          textStyle={{color: '#f0a500'}}
          overlayColor='rgba(0, 0, 0, .6)'

        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={60}>
            <ScrollView style={GlobalStyles.authFormWrapper}>
              <View style={GlobalStyles.authLoginForm}>
              <Text style={GlobalStyles.authText}>Login</Text>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={loginSchema}
                  onSubmit={(values, actions) => {
                    actions.resetForm();
                    // console.log(values, 'values')
                    this.props.loginUser(values);
                  }}
                >
                  {(props) => (
                    <View style={GlobalStyles.authFormInput}>
                      <TextInput
                        style={GlobalStyles.loginInput}
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
                        style={GlobalStyles.loginInput}
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
                        onPress={() => this.props.navigation.navigate("Register")}
                        style={GlobalStyles.loginTextSpanWrapper}
                      >
                        <Text style={GlobalStyles.loginTextSpan}>Register</Text>
                      </TouchableOpacity>
                      {loading ? <TouchableOpacity
                        style={GlobalStyles.formButton}
                        onPress={props.handleSubmit}
                      >
                        <Text style={GlobalStyles.buttonText}>Loading...</Text>
                      </TouchableOpacity> : <TouchableOpacity
                        style={GlobalStyles.formButton}
                        onPress={props.handleSubmit}
                      >
                        <Text style={GlobalStyles.buttonText}>Submit</Text>
                      </TouchableOpacity>}
                      
                      <Text style={GlobalStyles.emptyInput}></Text>
                      <Text style={GlobalStyles.emptyInput}></Text>
                      <Text style={GlobalStyles.emptyInput}></Text>
                      <Text style={GlobalStyles.emptyInput}></Text>
                    </View>
                  )}
                </Formik>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userProfile,
  existingUser: state.existingUser
})

export default connect(mapStateToProps, {loginUser, userProfile})(Login);
