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
            <View style={GlobalStyles.authFormInput}>
            <TextInput 
              style={GlobalStyles.input}
              placeholder='Email'
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
              placeholderTextColor={'#fff'}
            />
            <TextInput 
              style={GlobalStyles.input}
              placeholder='Password'
              onChangeText={formikProps.handleChange('password')}
              value={formikProps.values.password}
              placeholderTextColor={'#fff'}
            />
            <TouchableOpacity style={GlobalStyles.formButton} onPress={formikProps.handleSubmit}>
              <Text style={GlobalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
          </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}
