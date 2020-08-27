import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import { globalImages } from "../styles/globalImages";
import ProfileFormModal from './ProfileFormModal'
import { connect } from "react-redux";
import { userProfile } from "../redux/actions/ProfileAction";
import { logoutUser } from "../redux/actions/LogoutAction";



class ProfileCard extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    const { isAuthenticated } = this.props.existingUser;
    if (isAuthenticated) {
    const { userProfile:{user} } = this.props.profile;
    if(user === undefined){
      return this.onLogOut
    }
      this.props.navigation.navigate("Dashboard");
    }
  }
  onLogOut = () => {
    this.props.logoutUser();
    this.props.navigation.navigate('Home')
  }

  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal =()=>{
    this.setState({ modal: false });
  }
  render() {
    const { modal } = this.state;
    // const { userProfile:{user} } = this.props.profile;
    
    const { userProfile } = this.props.profile;
    return (
      <>
      <View style={GlobalStyles.image}>
        <View style={GlobalStyles.profitTop}>
          {userProfile && userProfile.user.image_url === null ? 
          <Image
            style={GlobalStyles.profileAvartarImage}
            source={globalImages.Avartar}
          /> :
          <Image
            style={GlobalStyles.profileAvartarImage}
            source={{uri: userProfile && userProfile.user.image_url}}
          />}
          <TouchableOpacity onPress={this.onLogOut} style={GlobalStyles.profileTopButton}>
            <Text style={GlobalStyles.profileTopButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
        <View style={GlobalStyles.profileBottom}>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>First Name: </Text>
            <Text style={GlobalStyles.profileBottomText}>{userProfile && userProfile.user.first_name} </Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Last Name: </Text>
            <Text style={GlobalStyles.profileBottomText}>{userProfile && userProfile.user.last_name}</Text>
          </View>
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Email: </Text>
            <Text style={GlobalStyles.profileBottomText}>{userProfile && userProfile.user.email}</Text>
          </View>
          
          <View style={GlobalStyles.profileWrapper}>
            <Text style={GlobalStyles.profileBottomTextKey}>Phone: </Text>
            <Text style={GlobalStyles.profileBottomText}>{userProfile && userProfile.user.phone}</Text>
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

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  profile: state.userProfile,
});
export default connect(mapStateToProps, { logoutUser, userProfile })(ProfileCard);

