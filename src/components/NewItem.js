//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Card,Button, Alert } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import {  displayList, deleteFromList,addToBucketList } from '../actions/bucketAction'
//import { db } from '../config';
//import firebase from 'firebase'
import EachItem from './EachItem'
const mapStateToProps = (state) => {
    console.log(state);
    return {
        //ItemtoAdd: state.bucketList.ItemtoAdd,
        bucketListError: state.bucket.bucketListError,
        personData : state.bucket.personData,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToBucketList: (newItem) => dispatch(addToBucketList(newItem)),
        displayList: () => dispatch(displayList()),
        deleteFromList : (delItem) => dispatch(deleteFromList(delItem)),
    };
}



// create a component
class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
           // ItemtoAdd: this.props.ItemtoAdd,
            text: "",
            delKey : ""

        }
    }

    componentDidMount(){
    
       // this.props.displayList();

    }
    addItemHandler = () => {

        //redux store
        // this.setState({ userId: uid });
        // this.props.addToBucket(this.state.ItemtoAdd);
        let existing = false;
        if(this.state.text.length != 0 ){
            let existingItems = this.props.personData;
            for(var i = 0; i < existingItems.length; i++){
               if((existingItems[i].eachItem[1].item) == this.state.text){
                    existing = true;
               }
            }
            if(existing != true){
                this.props.addToBucketList(this.state);
            }
            else{
                Alert.alert("Item already existing in the list")
            }
          }
       this.props.displayList();
       

    };
    deleteHandler = (deleteItem)=>{
        console.log("delKey in eachItem: " + deleteItem)
        this.props.deleteFromList(deleteItem);
        this.forceUpdate;
    };


    render() {
        //console.log("personData = " +JSON.stringify(this.props.personData));
        return (
            <View >
                <View style={styles.container}>
                <TextInput
                    onChangeText={(input) => this.setState({ text: input })}
                    placeholder="Add item"
                    style={styles.addItem}
                />
                <Button
                    color='#52B2BF'
                    style={styles.addButton}
                    title="Add"
                    onPress={this.addItemHandler}
                />      
                </View>
                
                <ScrollView>

                  
                    {
                    
                    
                    // console.log("personData in render" + JSON.stringify(this.props.personData)),
                    this.props.personData.map((item, key) => (
                       
                                              
                        <View key={key}>
                           <EachItem itemVal= {item.eachItem[1].item} keyVal = {item.eachItem[0]} />
                           <Button onPress = {() => this.deleteHandler(item.eachItem[0])}
                title = "delete"/>
                        </View>
                        ))
                            
                    }
                   
                   
                </ScrollView>
                
            </View>



        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 20
    },
    addButton: {
        //color: '#D3D3D3',
        height: 50,
        flex: 1,
        padding: 5
    },
    addItem: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#D3D3D3',
        height: 50,
        flex: 1,
        padding: 5
    }

});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
