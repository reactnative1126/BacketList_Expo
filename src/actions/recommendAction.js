import {
  GET_RECOMMENDATIONS,
  RECOMMENDATIONS_TO_LIST,
  RECOMMENDATIONS_ERROR
} from "./types";
import styles from "../StyleSheet";
import React from "react";
import { Text } from "react-native";
import { Row } from "react-native-easy-grid";
import firebase from "firebase";
import { db } from "../config";
  
const NUMBER_OF_RESULTS_LIMIT = 3;

export const getRecommendations = query => {
  return async (dispatch, getState) => {
    // API Query Setup
    var keywords = [];
    if (query.personData === undefined){
      keywords = []; 
    }
    else{
      for (var i = 0; i < query.personData.length; i++) {
        keywords.push(query.personData[i].eachItem[1].item);
      }
    }
    var apiURLs = (key) => { 
        return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${query.currentRegion.latitude},${query.currentRegion.longitude}
        &radius=10000
        &keyword=${key}
        &key=AIzaSyBqh6uco7iZCh-FOBKWzPxxHAkTpBEtdFI`;
    }
    try {
    // API Query Defintion
      const apiQuery = async (apiURL) => {
        const result = await fetch(apiURL);
        const json = await result.json();
        return json;
      }
    // API Query Calls
      var queries = {
        results: []
      }
      for(var i = 0; i < keywords.length; i++){
        var URL = apiURLs(keywords[i]);
        var returnVal = await apiQuery(URL);
        if(returnVal !== undefined && returnVal.length != 0){
          var limit = returnVal.results.length < NUMBER_OF_RESULTS_LIMIT ? returnVal.results.length : NUMBER_OF_RESULTS_LIMIT;
          for(var j = 0; j < limit; j++){
              queries.results = queries.results.concat(returnVal.results[j]);
          }
        }
      }
      var recommendations = queries;
    // Firebase Database Update
      const userId = firebase.auth().currentUser.uid;
      const ref = "/users/" + userId + "/recommended/";
      db.ref(ref).remove();
      db.ref(ref).push(recommendations);
    // Value Passed to Reducer (Local Database)
      dispatch({ type: GET_RECOMMENDATIONS, recommendList: recommendations });
    }
    // Error Handling
    catch(err){
      console.error(err);
      dispatch({ type: RECOMMENDATIONS_ERROR, err})
    }
  }
};

export const recommendationsToList = recommendations => {
  return (dispatch, getState) => {
    try {
      var viewableList;
      if(recommendations === undefined || recommendations.length == 0 || recommendations.results.length == 0){
        viewableList = <Row><Text>No Recommendations</Text></Row>
      }
      else{
        viewableList = recommendations.results.map((item, key) => {
          return (<Row key={key} style={styles.listItem}>
            <Text>{item.name}</Text>
          </Row>);
        })
      }
      dispatch({ type: RECOMMENDATIONS_TO_LIST, viewableList });
    }
    catch(err){
      console.error(err);
      dispatch({ type: RECOMMENDATIONS_ERROR, err})
    }
  }
};