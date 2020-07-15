import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
// import Salad from "../../assets/images/delivery-man-svg.png"
import Salad from "../../assets/images/black-burger-banner.jpg"
import Logo from "../../assets/images/Swift-logo.gif"


export default function Welcome() {
  return (
      <ImageBackground style={styles.image} source={Salad}>
       <View style={styles.imageText}>
            <Image style={styles.innerImage} source={Logo}/>
          <Text style={styles.text}>SWIFT FOODS</Text>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
   fontSize: 35,
   fontWeight: '900',
   color: '#fff',
   top: '2%'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    alignItems: "center",
    justifyContent: 'center',
  },
  innerImage: {
    borderRadius: 100
   },
  image: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  imageText: {
    alignItems: 'center', 
    justifyContent: 'flex-start',
    top: '5%',
    flex: 1,
  }
});
