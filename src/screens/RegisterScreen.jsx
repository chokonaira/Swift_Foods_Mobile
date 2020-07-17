import React from "react";
import { ImageBackground, TextInput, View, Text } from "react-native";
import Banner from "../../assets/images/login-banner-blur.jpg";
import { GlobalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import Button from "../components/Button";

export default function Register() {
  return (
    <ImageBackground style={GlobalStyles.image} source={Banner}>
      <View style={GlobalStyles.formTextWrapper}>
      <Text style={GlobalStyles.formText}>Register</Text>
      </View>
      <View style={GlobalStyles.authForm}>
        <Formik
        initialValues={{ first_name: '', last_name: '', email: '', phone: '', password: '' }}
        onSubmit = {(values) => {
          console.log(values, 'values')
        }}
        >
          {(formikProps) => (
            <View style={GlobalStyles.authFormInput}>
              <TextInput 
                style={GlobalStyles.input}
                placeholder='First Name'
                onChangeText={formikProps.handleChange('first_name')}
                value={formikProps.values.first_name}
                placeholderTextColor={'#fff'}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Last Name'
                onChangeText={formikProps.handleChange('last_name')}
                value={formikProps.values.last_name}
                placeholderTextColor={'#fff'}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Email'
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
                placeholderTextColor={'#fff'}
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Phone'
                onChangeText={formikProps.handleChange('phone')}
                value={formikProps.values.phone}
                placeholderTextColor={'#fff'}
                keyboardType='numeric'
              />
              <TextInput 
                style={GlobalStyles.input}
                placeholder='Password'
                onChangeText={formikProps.handleChange('password')}
                value={formikProps.values.password}
                placeholderTextColor={'#fff'}
              />
              <Button style={GlobalStyles.formButton} title='Submit' onPress={formikProps.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}
