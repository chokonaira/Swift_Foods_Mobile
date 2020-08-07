import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from "../styles/globalImages";
import ProfileFormModal from './ProfileFormModal'


class ProfileCard extends Component {
  state = {
    modal: false,
  };

  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal =()=>{
    this.setState({ modal: false });
  }
  render() {
    const { modal } = this.state;
    return (
      <>
      <View style={GlobalStyles.image}>
        <View style={GlobalStyles.profitTop}>
          <Image
            style={GlobalStyles.profileAvartarImage}
            source={globalImages.Passport}
          />

          <TouchableOpacity style={GlobalStyles.profileTopButton}>
            <Text style={GlobalStyles.profileTopButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
        <View style={GlobalStyles.profileBottom}>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>First Name: </Text>
            <Text style={GlobalStyles.profileBottomText}>Henry </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Last Name: </Text>
            <Text style={GlobalStyles.profileBottomText}>Okonkwo </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Email: </Text>
            <Text style={GlobalStyles.profileBottomText}>okonkwo.henry2012@gmail.com </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Address: </Text>
            <Text style={GlobalStyles.profileBottomText}>#6, 386 St, Kagarama </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Phone: </Text>
            <Text style={GlobalStyles.profileBottomText}>+2348069537560 </Text>
          </View>
          <Text style={GlobalStyles.emptyInput}></Text>
          <TouchableOpacity onPress={this.openModal} style={GlobalStyles.profileBottomButton}>
            <Text style={GlobalStyles.profileBottomButtonText}>Edit Details</Text>
          </TouchableOpacity>
        </View>
      <ProfileFormModal openModal={modal} closeModal={this.closeModal}/>

      </View>
      </>
    );
  }
}

export default ProfileCard;
