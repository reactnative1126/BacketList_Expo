import React from 'react';
import { combineReducers } from 'redux'
import { firebaseReducer} from 'react-redux-firebase';
import authReducer from './authReducer'
import bucketReducer from './bucketReducer';
import locationReducer from './locationReducer';
import recommendReducer from './recommendReducer';



const rootReducer = combineReducers({
    firebase: firebaseReducer, // stores whether or not user is logged in
    auth: authReducer,
    bucket: bucketReducer,          // stores the bucket lists
    location: locationReducer,       //stores the current location
    recommend: recommendReducer,     // stores recommendations based on user location
})

export default rootReducer;