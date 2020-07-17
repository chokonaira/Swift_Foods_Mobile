import React from "react";
import { ImageBackground, TextInput, View, Text } from "react-native";
import Banner from "../../assets/images/login-banner-blur.jpg";
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";

export default function Login() {
  return (
    <ImageBackground style={GlobalStyles.image} source={Banner}>
      <View style={GlobalStyles.formCOntainer}>
        <Formik
        initialValues={{ first_name: '', last_name: '', email: '', phone: '', password: '' }}
        onSubmit = {(values) => {
          console.log(values, 'values')
        }}
        >
          {(formikProps) => (
            <View>
              <TextInput 
                style={GlobalStyles.input}
                placeholder='First Name'
                onChangeText={formikProps.handleChange('first_name')}
                value={formikProps.values.first_name}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Last Name'
                onChangeText={formikProps.handleChange('last_name')}
                value={formikProps.values.last_name}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Email'
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Phone'
                onChangeText={formikProps.handleChange('phone')}
                value={formikProps.values.phone}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Password'
                onChangeText={formikProps.handleChange('password')}
                value={formikProps.values.password}
              />
              
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}
