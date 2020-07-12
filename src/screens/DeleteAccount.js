import styles from "../StyleSheet";
import React from 'react';
import {  Container, View, Button, Text, ScrollView, TouchableOpacity } from "react-native";
import firebase from 'firebase';
import { db } from '../config';
import { connect } from "react-redux";
import { deleteUser } from "../actions/authActions";

if (!firebase.apps.length)
{
    firebase.initializeApp(db);
}

class DeleteAccount extends React.Component{

_deleteHandler = () => {
  this.props.delete();

  if (this.props.isLogged)
  {
      this.props.navigation.navigate('Landing');
      console.log("err: Delete account failed");
  }
  else
  {
      this.props.navigation.navigate('Landing');
  }
}


  render() {
    return(
      <View style={{flex: 1, margin: 25}}>
        <Text style={styles.subtitle}>Are you sure you want to permanently delete your account?</Text>

        <TouchableOpacity style={styles.deleteConfirmButton} onPress= {() => {this._deleteHandler()}}>
                <Text style={{color:"white", fontSize: 16, fontWeight:"bold"}}>
                   Delete Account
                </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton} onPress= {() => {this.props.navigation.goBack()}}>
                <Text style={{color:"white", fontSize: 16, fontWeight:"bold"}}>
                   Cancel
                </Text>
        </TouchableOpacity>
      
      </View>
    )}
  }

  const mapStateToProps = (state) => {
    return {
      isLogged: state.auth.isLogged
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      delete: () => dispatch(deleteUser())
    };
  };
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);