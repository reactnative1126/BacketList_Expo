import styles from "../StyleSheet";
import React from "react";
import { Container, View, Button, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import { logout } from "../actions/authActions";


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      logoutPressed: false
    };
  }

// Marked for deletion
  // logoutHandler = e => {
  //   this.props.logout();
  //   console.log("isLogged value in Progile for logout: " + this.props.isLogged)
  //   if (!this.props.isLogged) {
  //     this.props.navigation.navigate("Landing");
  //   } else {
  //     //user is still signed in
  //     console.log("ERROR: User is still signed in");
  //   }
  // };

  onLogout = () => {
    this.props.logout();
    this.state.logoutPressed = true;
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.logoutButton} onPress= {() => {this.onLogout();}}>
                <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
                   Logout
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteAccountButton} onPress= {() => {this.props.navigation.navigate("DeleteAccount")}}>
                <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
                   Delete Account
                </Text>
        </TouchableOpacity>

      </View>
    );
  }

  componentDidUpdate(prevProps){
    if (this.state.logoutPressed && prevProps.isLogged !== this.props.isLogged){
      this.props.navigation.navigate("Landing");
      this.state.logoutPressed = false;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
