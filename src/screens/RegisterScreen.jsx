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
import { registerSchema } from "../helpers/formValidationSchema"


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
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            actions.resetForm()
            console.log(values, "values");
          }}
        >
          {(props) => (
            <View style={GlobalStyles.authFormInput}>
              <TextInput
                style={GlobalStyles.input}
                placeholder="First Name"
                onChangeText={props.handleChange("first_name")}
                value={props.values.first_name}
                placeholderTextColor={"#fff"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <Text style={GlobalStyles.errorText}>{props.touched.first_name && props.errors.first_name}</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Last Name"
                onChangeText={props.handleChange("last_name")}
                value={props.values.last_name}
                placeholderTextColor={"#fff"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <Text style={GlobalStyles.errorText}>{props.touched.last_name && props.errors.last_name}</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Email"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                placeholderTextColor={"#fff"}
                autoCapitalize='none'
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                keyboardType={"email-address"}
              />
              <Text style={GlobalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Phone"
                onChangeText={props.handleChange("phone")}
                value={props.values.phone}
                placeholderTextColor={"#fff"}
                keyboardType={"numeric"}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
              <Text style={GlobalStyles.errorText}>{props.touched.phone && props.errors.phone}</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                placeholderTextColor={"#fff"}
                secureTextEntry={true}
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
              />
             <Text style={GlobalStyles.password}>{props.touched.phone && props.errors.phone.password}</Text>

              <TouchableOpacity onPress={pressHandler}>
                <Text style={GlobalStyles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={GlobalStyles.formButton}
                onPress={props.handleSubmit}
              >
                <Text style={GlobalStyles.buttonText}>Submit</Text>
              </TouchableOpacity>
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
