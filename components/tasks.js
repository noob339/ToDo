import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'


const Task = (props) => {


    return (

        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style = {styles.sqaure}></TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>

            </View>
            {/* <View style = {styles.circular}></View> */}
        </View>

    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#EFF',
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
        marginTop: 10
        

    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    sqaure: {
        width: 20,
        height: 20,
        backgroundColor:'#ffd014',
        opacity: 0.4,
        borderRadius: 5,
        marginRight:15,
    },

    text: {
        maxWidth: '80%',

    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#ffd014',
        borderWidth:2,
        borderRadius: 5,

    },
});

export default Task;