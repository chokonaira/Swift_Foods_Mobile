import React, { Component } from "react";
import { Text } from "react-native";
import { FooterTab, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyles } from "../styles/globalStyles";

class Footer extends Component {
  tabs = [
    {
      title: "TaxtCar",
      subtitle: "",
      icon: "car",
    },
    {
      title: "TaxtShare",
      subtitle: "",
      icon: "car",
    },
    {
      title: "TaxtPremium",
      subtitle: "",
      icon: "car",
    },
    {
      title: "TaxtBike",
      subTitle : "",
      icon: "car",
    },
  ];
  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    return (
      <>
          <FooterTab style={GlobalStyles.FooterWrapper}>
        {this.tabs.map((obj, index) => {
          return (
            <Button key={index}>
              <Icon size={20} name={obj.icon} color={(index === 0) ? "#FF5E3A" : 'grey'}></Icon>
              <Text style={{fontSize:12, color:(index === 0) ?  "#FF5E3A" : 'grey'}}>{obj.title}</Text>
              <Text style={GlobalStyles.footerText}>{obj.subTitle}</Text>

            </Button>
          );
        })}
          </FooterTab>
      </>
      
    );
  }
}
export default Footer;
