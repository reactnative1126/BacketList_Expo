import React from "react";
import {  Container, View, Button, Component } from "react-native";
import firebase from "firebase";
import styles from "../StyleSheet";
import {db} from '../config'
import {connect} from 'react-redux'
import {   Text  } from "react-native";
import NewItem from '../components/NewItem';
import { addToBucket, watchPersonData, displayList, addToBucketList } from '../actions/bucketAction'
import {  TouchableOpacity, TextInput } from "react-native-gesture-handler";


const mapStateToProps = (state) =>{
  return{
      //personData : state.bucketList.personData,
  };
}

const mapDispatchToProps = (dispatch) =>{
  return{
    //displayList: () => dispatch(displayList()),
  }
}
class BucketList extends React.Component{
  constructor() {
    super();
    this.state = {
      item: "",
      curr: 0
      //password: ""
    };
  }


render() {
 // this.props.displayList();
    return (
      
      <View >
       <NewItem/>
       {/*
          this.props.personData.map((item, key) => (
            <TouchableOpacity key={key} onPress={console.log("item: " + JSON.stringify(item))} >
                <Text>{item.eachItem[1].item}</Text>
            </TouchableOpacity>
        ))*/
              
     }
      </View>

     
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(BucketList);

