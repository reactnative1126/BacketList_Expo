// import styles from "../StyleSheet";
import React from 'react';
import { Container,Alert, View, TextInput, StyleSheet, Text, ScrollView } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Row, Col } from "react-native-easy-grid";
import { db } from '../config.js';
import { connect } from 'react-redux';
import { addBucket, addToBucketList } from '../actions/bucketAction';


class SetupBucketList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            bucketList: [],
        }
    }

    txtHandler = (e) => {
        this.setState({ text: e.nativeEvent.text });
    }

    addBucketList = () => {
        console.log('buttonClicked');
        /*let userId = 1;
        let text = this.state.text;
        let newItem = {
            userId: userId,
            text: text
        };
        this.props.addBucket(newItem);          // add the bucket item - user input - to the firebase, using redux
        */

       let existing = false;
       let existingItems = this.state.bucketList;
       if(this.state.text.length != 0 ){
           for(var i = 0; i < existingItems.length; i++){
              if((existingItems[i]) == this.state.text){
                   existing = true;
              }
           }
           if(existing != true){
               this.props.addToBucketList(this.state);
               
        
                existingItems.push(this.state.text);
        this.setState({ bucketList: existingItems });
           }
           else{
               Alert.alert("Item already existing in the list")
           }
         }
       console.log("setup Bucketlist : " + this.state.text)
        
    }

    render() {
        let { text, bucketList } = this.state;
        return (
            <ScrollView style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Row style={{ padding: 20 }}>
                        <TextInput placeholder="Add Item" style={styles.txtInput}
                            value={text}
                            onChange={(e) => this.txtHandler(e)}
                        ></TextInput>
                    </Row>
                    <Row>
                        <Button type="outline"
                            buttonStyle={{ borderRadius: 50, width: 70, height: 70, backgroundColor: "#8BCE9F" }}
                            icon={<Icon type="font-awesome" name="plus" style={{ fontSize: 15, fontWeight: '100' }}></Icon>}
                            onPress={() => this.addBucketList()}
                        ></Button>
                    </Row>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, }}>
                    {
                        bucketList.map((item, key) => (
                            <Row key={key} style={styles.listItem}>
                                <Text>{item}</Text>
                            </Row>
                        ))
                    }
                </View>
                <View style={{ padding: 20, paddingLeft: 10, paddingRight: 10 }}>
                    <Row>
                        <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                type="outline"
                                buttonStyle={styles.btnStyle}
                                title="Skip for now"
                                onPress={() => { this.props.navigation.navigate('SetupCalendar') }} />
                        </Col>
                        <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                type="outline"
                                buttonStyle={styles.btnStyle}
                                title="Next"
                                onPress={() => { this.props.navigation.navigate('SetupCalendar') }} />
                        </Col>
                    </Row>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // display: 'flex',
    },
    txtInput: {
        width: 200,
        height: 40,
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderStyle: 'solid',
        backgroundColor: 'white',
        padding: 5,
        paddingLeft: 15,
        marginTop: 60,
    },
    btnStyle: {
        width: 150,
        height: 40,
        borderRadius: 50,
    },
    listItem: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderStyle: 'solid',
        marginBottom: 10,
        width: 200,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',

    }
});

const mapStateToProps = (state) => {
    return {
        bucket: state.bucket,
        //bucketItems: state.bucket.personData


    }
};

const mapDispatchToProps = (dispatch) => {
    return {
      //  addBucket: (newItem) => dispatch(addBucket(newItem)),
        addToBucketList: (newItem) => dispatch(addToBucketList(newItem)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupBucketList);