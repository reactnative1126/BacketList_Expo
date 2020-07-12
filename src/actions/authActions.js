import {
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_SUCCESS,
  DELETE_ERROR
} from "./types";

import firebase from "firebase";
import { db } from "../config";

export const login = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
        console.log("auth actions: logged in");
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
    }).catch((err) => {
        console.log(err);
         dispatch({ type: LOGOUT_ERROR, err });
    });
  };
};



export const signup = newUser => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(userInfo => {
        //info about the user we just signed-up userInfo.user
        console.log("new user created!(in authActions" + userInfo);
        //TODO: ADD usesr profile info to the db
        const userId = firebase.auth().currentUser.uid;
        if (userId) {
          userInfo.user
            .updateProfile({
              displayName: newUser.firstName + " " + newUser.lastName
            })
            .then(s => {
              db
                .ref("/users/" + userId + "/profile")
                .set({
                    email: newUser.email,
                    fname: newUser.firstName,
                    lname: newUser.lastName,
                    age: newUser.age
                })
                .then((data) => {
                    //login the user after they are signed up
                    this.login(newUser);
                })
                .catch((err) =>{ c
                    console.log(err);
                    dispatch({type: SIGNUP_ERROR, err});
                }
                )
            }
            );
        }
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_ERROR, err});
      });
  };
};

export const clearErrors = () => {

    return (dispatch) => {
        dispatch({ type: CLEAR_ERRORS});
    }
};

export const deleteUser = () => {
  return (dispatch, getState) => {
    var user = firebase.auth().currentUser;
    user.delete().then(() => {
      dispatch({ type: DELETE_SUCCESS });
    }).catch((err) => {
        console.log(err);
         dispatch({ type: DELETE_ERROR, err });
    });
  };
};


