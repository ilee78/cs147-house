import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

function Houses({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text>houses screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    }
});

export default Houses;