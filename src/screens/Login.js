import styles from "../StyleSheet";
import React from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ScrollView,
  Alert
} from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";

import { login } from "../actions/authActions";


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginPressed: false
    };
  }

  // Marked for Deletion
  // loginHander = () => {
  //   this.props.login(this.state);
  //    if (this.props.isLogged) {
  //     this.props.navigation.navigate("Home");
  //   } else {
  //     console.log("ERROR: User not logged in correctly ");
  //   }
  // };

  onLogin = () => {
    this.props.login(this.state);
    this.state.loginPressed = true;
  }

  // Marked for Deletion
  // checkTextInput = () =>{
  //   if (this.state.email != ""){
  //     if (this.state.password != ""){
  //         this.loginHander();
  //     }else{
  //       alert("Please enter your password.");
  //     }
  //   }else{
  //     alert("Please enter your email.");
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Image
              style={{ width: 225, height: 250, marginTop: 45 }}
              source={require("../../assets/icon.png")}
            />
          </View>
          <TextInput
            style={styles.loginTextBox}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            placeholder="Email"
            value={this.state.username}
            accessibilityLabel="username"
          ></TextInput>

          <TextInput
            style={styles.loginTextBox}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            placeholder="Password"
            secureTextEntry
            value={this.state.password}
            accessibilityLabel="password"
          ></TextInput>
          <Text>{this.props.authError}</Text>

          <TouchableOpacity style={styles.loginButton} onPress={() => this.onLogin()} accessibilityLabel="login">
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Login
                </Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.state.loginPressed && prevProps.isLogged !== this.props.isLogged) {
      this.props.navigation.navigate("Home");
      this.state.loginPressed = false;
    }
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.loginError,
    isLogged: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => dispatch(login(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
