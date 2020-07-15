import React from "react";
import { StyleSheet, Image, View } from "react-native";
import chokoLogo from "../../assets/images/custom-logo.png";

export default function Logo() {
  return (
    <View style={styles.logoWrapper}>
      <Image style={styles.logo} source={chokoLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    borderRadius: 100
   },
  logoWrapper: {
    alignItems: 'center', 
    justifyContent: 'flex-start',
    top: '10%',
    flex: 1,
  }
});
