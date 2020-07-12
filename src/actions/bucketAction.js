import {
    ITEM_ADDED,
    GET_ALL_ITEMS,
    ADD_ITEM_ERROR,
    ADD_ITEM_SUCCESS,
    DISPLAY_ITEMS,
    DELETE_ITEM
} from "./types";

import firebase from "firebase";
import { db } from "../config";
import {ThunkMiddleware} from 'redux-thunk'

export const getAllBuckets = () => {
    return (dispatch, getState) => {
        let bucketList = [];
        dispatch({ type: GET_ALL_ITEMS, bucketList: bucketList, loading: true });
        let starCountRef = db.ref('bucketList');                // get reference of firebase
        starCountRef.on('value', function (snapshot) {          // get bucket lists from the firebase database
            snapshot.forEach((childSnapshot) => {
                bucketList.push(childSnapshot);
                // ...
            });
            dispatch({ type: GET_ALL_ITEMS, bucketList: bucketList, loading: false });
        });
    };
};

export const addBucket = (bucketItem) => {
    return (dispatch, getState) => {


        let newPostKey = db.ref().child('bucketList').push().key;
        console.log(newPostKey)
        db.ref('bucketList/' + newPostKey).set({                // add the bucket list to the firebase database
            userId: bucketItem.userId,
            bucketListItem: bucketItem.itemText,
        },
            (error) => {
                if (error)
                    alert('Save Database Failed');
                else {
                    dispatch({ type: ITEM_ADDED, newItem: bucketItem });
                }
            });
    };
};

export const addToBucketList = (itemObject) => {
    return (dispatch) => {
        const userId = firebase.auth().currentUser.uid;
console.log(itemObject.text);
        if (userId) {
            db
                .ref("/users/" + userId + "/bucketlist/")
                .push({

                    item: itemObject.text,
                    isCompleted: false
                })
                .then(() => {
                    
                    dispatch({ type: ADD_ITEM_SUCCESS, ItemtoAdd: itemObject.text  });
                })
                .catch((err) => {
                    //console.log(err);

                    dispatch({ type: ADD_ITEM_ERROR, err });
                }
                )
               // Alert.alert('added');

        }

    }



};

export const deleteFromList = (delKey) =>{
    console.log("delKey in deleteAction: " + delKey);
    return(dispatch)  => {
        const userId = firebase.auth().currentUser.uid;
       // console.log("delKey" + delKey)
        //let reqdKey = deleteObject.keyVal;
        if(userId){
        /*    db
                .ref("users/" +userId + "/bucketlist/")
                    .child(delKey + "isCompleted")
                        .update({isCompleted: "true"})*/
                           
           db.ref("users/" +userId + "/bucketlist/" + delKey).remove()
            .then (() =>{
                dispatch(displayList());
                
            }
            )
        }
        dispatch({type: DELETE_ITEM })

    }
};

export const displayList = () => {
    return (dispatch) =>{
        const userId = firebase.auth().currentUser.uid;
        let courses =[];
        if(userId){
            //console.log(userId)
             db.ref("users/" +userId + "/bucketlist"  ).on("value", function (snapshot) {
            var listData = snapshot.val();
            var keys = Object.keys(listData);
            for(const eachItem of Object.entries(listData)){
                courses.push({eachItem});
            }
            //console.log("courses:" + JSON.stringify(courses));
            ///setPersonData(personData);
           // console.log("listData:"+ JSON.stringify(listData));
            
            
        });   

        dispatch({type: DISPLAY_ITEMS, personData:courses});
    }
}
};

