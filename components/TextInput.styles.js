import react from "react";
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    input:{
        height: 40,
        width: 200,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },

    font: {
        fontSize: 40,
        color: 'black'
    },
});