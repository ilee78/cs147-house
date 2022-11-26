import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

function Houses({navigation}) {
    return(
        <SafeAreaView>
            <Text style={styles.container}>houses screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    }
});

export default Houses;