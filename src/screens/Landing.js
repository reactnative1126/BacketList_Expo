import styles from "../StyleSheet";
import React from 'react';
import {  Container, View, Button, TouchableOpacity, Text } from "react-native";
import { clearErrors } from "../actions/authActions";
import { connect } from "react-redux";


class Landing extends React.Component{
constructor(){
  super();
}

render() {
  this.props.clearErrors();
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.loginLandingButton} onPress={() => {this.props.navigation.navigate('Login')}}>
          <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
              Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupLandingButton} onPress={() => {this.props.navigation.navigate('Signup')}}>
          <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
              Signup
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(null, mapDispatchToProps)(Landing);

