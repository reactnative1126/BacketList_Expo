import styles from "../StyleSheet";
import React from 'react';
import {  Container, View, Button, Text, TouchableOpacity } from "react-native";


class SetupCalendar extends React.Component{

 
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.skipButton} onPress= {() => {this.props.navigation.navigate('SetupLocation')}}>
                    <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
                        Skip for now
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton} onPress= {() => {this.props.navigation.navigate('SetupLocation')}}>
                    <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
                        Next
                    </Text>
                </TouchableOpacity>
        
            </View>
        );
      }
    
    }
    export default SetupCalendar;