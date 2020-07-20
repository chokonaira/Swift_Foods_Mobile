import React from "react";
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Banner from "../../assets/images/signup-banner-blur.jpg";
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
// import Button from "../components/Button";

export default function Register({ navigation }) {

  const pressHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground style={GlobalStyles.image} source={Banner}>
      
       <KeyboardAvoidingView 
         behavior="height"
         keyboardVerticalOffset={60}
        >
        <ScrollView>
        <View style={GlobalStyles.authForm}>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values, "values");
          }}
          pressHandler ={() => navigation.navigate("Home")}
        >
          {(formikProps) => (
            <View style={GlobalStyles.authFormInput}>
              <TextInput
                style={GlobalStyles.input}
                placeholder="First Name"
                onChangeText={formikProps.handleChange("first_name")}
                value={formikProps.values.first_name}
                placeholderTextColor={"#fff"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <TextInput
                style={GlobalStyles.input}
                placeholder="Last Name"
                onChangeText={formikProps.handleChange("last_name")}
                value={formikProps.values.last_name}
                placeholderTextColor={"#fff"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <TextInput
                style={GlobalStyles.input}
                placeholder="Email"
                onChangeText={formikProps.handleChange("email")}
                value={formikProps.values.email}
                placeholderTextColor={"#fff"}
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                keyboardType={"email-address"}
              />
              <TextInput
                style={GlobalStyles.input}
                placeholder="Phone"
                onChangeText={formikProps.handleChange("phone")}
                value={formikProps.values.phone}
                placeholderTextColor={"#fff"}
                keyboardType={"numeric"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <TextInput
                style={GlobalStyles.input}
                placeholder="Password"
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
                placeholderTextColor={"#fff"}
                secureTextEntry={true}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <TouchableOpacity onPress={pressHandler}>
                <Text style={GlobalStyles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={GlobalStyles.formButton}
                onPress={formikProps.handleSubmit}
              >
                <Text style={GlobalStyles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
        </ScrollView>
        </KeyboardAvoidingView>
      {/* <View style={GlobalStyles.formTextWrapper}>
        <Text style={GlobalStyles.formText}>Register</Text>
      </View> */}
      
    </ImageBackground>
  );
}
