import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Neighborhood({navigation}) {

    return(
        <View>
            <Text style={styles.container}>neighborhood screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    }
});

export default Neighborhood;