import React from "react";
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
import Banner from "../../assets/images/login-banner-blur.jpg";
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import { loginSchema } from "../helpers/formValidationSchema";

export default function Login({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground style={GlobalStyles.image} source={Banner}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={60}>
          <ScrollView style={GlobalStyles.authFormWrapper}>
            <View style={GlobalStyles.authLoginForm}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  console.log(values, "values");
                }}
              >
                {(props) => (
                  <View style={GlobalStyles.authFormInput}>
                    <TextInput
                      style={GlobalStyles.loginInput}
                      placeholder="Email"
                      onChangeText={props.handleChange("email")}
                      value={props.values.email}
                      placeholderTextColor={"#fff"}
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
                      placeholderTextColor={"#fff"}
                      secureTextEntry={true}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                    />
                    <Text style={GlobalStyles.errorText}>
                      {props.touched.password && props.errors.password}
                    </Text>
                    <TouchableOpacity
                      onPress={pressHandler}
                      style={GlobalStyles.loginTextSpanWrapper}
                    >
                      <Text style={GlobalStyles.loginTextSpan}>Register</Text>
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
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
