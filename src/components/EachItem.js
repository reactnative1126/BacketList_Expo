//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , IconButton,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

// create a component


class EachItem extends Component {


    render() {
        return (
            console.log("currItem: " + JSON.stringify(this.props.keyVal)),
            
          <View style={styles.container }>
            <Text>{this.props.itemVal}</Text> 
           
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC0CB',
        flexDirection : 'row'
    },
});

//make this component available to the app
export default EachItem;
