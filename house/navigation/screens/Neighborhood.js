import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';


function Neighborhood({navigation}) {

    return(
        <SafeAreaView>
            <Text style={styles.container}>neighborhood screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    }
});

export default Neighborhood;