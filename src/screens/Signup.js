import styles from "../StyleSheet";
import React from "react";
import {
  Container,
  View,
  Button,
  TextInput,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";

import { signup } from "../actions/authActions";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      signupPressed: false
    };
  }

  signupHandler = () => {
    this.props.signup(this.state);
    this.state.signupPressed = true;
    // console.log("auth error in signup" + this.props.authError);
    // console.log("value of isLogged in Signup: " + this.props.isLogged);
    // if (this.props.isLogged){
    //   this.props.navigation.navigate("SetupBucketList");
    // }

  }

  checkTextInput = () =>{
    if (this.state.firstName != ""){
      if (this.state.lastName != ""){
        if (this.state.age != "0"){
          this.signupHandler();
        }else{
          alert("Please enter your age.");
        }
      }else{
        alert("Please enter your last name.");
      }
    }else{
      alert("Please enter your first name.");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            style={styles.signupTextBox}
            onChangeText={text => {
              this.setState({ firstName: text });
            }}
            placeholder="First Name"
            value={this.state.firstName}
          ></TextInput>
          <TextInput
            style={styles.signupTextBox}
            onChangeText={text => {
              this.setState({ lastName: text });
            }}
            placeholder="Last Name"
            value={this.state.lastName}
          ></TextInput>
          <TextInput
            style={styles.signupTextBox}
            keyboardType="number-pad"
            onChangeText={text => {
              this.setState({ age: text });
            }}
            placeholder="Age"
            value={this.state.age}
          ></TextInput>
          <TextInput
          placeholder='Email'
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false} 
            style={styles.signupTextBox}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            placeholder="Email"
            value={this.state.username}
          ></TextInput>

          <TextInput
          secureTextEntry={true}
          placeholder='Password'
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false} 
            style={styles.signupTextBox}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            placeholder="Password"
            value={this.state.password}
          ></TextInput>

          {/* this currently displays the login error if there is one */}
           <Text>{this.props.authError}</Text> 

        <TouchableOpacity style={styles.signupButton} onPress= {() => {this.checkTextInput();}}>
                <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
                    Sign Me Up!
                </Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }

  componentDidUpdate(prevProps){
    if (this.state.signupPressed && prevProps.isLogged !== this.props.isLogged){
      this.props.navigation.navigate("SetupBucketList");
      this.state.signupPressed = false;
    }
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.signupError,
    isLogged: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: newUser => dispatch(signup(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
