import React from "react";
import {
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Banner from "../../assets/images/login-banner-blur.jpg";
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";


export default function Login({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground style={GlobalStyles.image} source={Banner}>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={60}>
        <ScrollView style={GlobalStyles.authFormWrapper}>
          <View style={GlobalStyles.authLoginForm}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values, "values");
              }}
            >
              {(formikProps) => (
                <View style={GlobalStyles.authFormInput}>
                  <TextInput
                    style={GlobalStyles.input}
                    placeholder="Email"
                    onChangeText={formikProps.handleChange("email")}
                    value={formikProps.values.email}
                    placeholderTextColor={"#fff"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    keyboardType={"email-address"}
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
                    <Text style={GlobalStyles.registerText}>Register</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={GlobalStyles.formButton}
                    onPress={formikProps.handleSubmit}
                  >
                    <Text style={GlobalStyles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={GlobalStyles.emptyInput}
                  />
                  <TextInput
                    style={GlobalStyles.emptyInput}
                  />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
