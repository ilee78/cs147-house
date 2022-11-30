import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';


function Neighborhood({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <Text style={styles.container}>neighborhood screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    },
    background: {
        flex: 1,
        backgroundColor: '#40187B',
        justifyContent: 'center',
    }
});

export default Neighborhood;