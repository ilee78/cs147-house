import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable, Image } from 'react-native';
import EmptyNeighborhoodGraphic from '../../assets/boxesGraphic.png';

function Neighborhood({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView>

            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Text style={styles.whiteHeader}>it's empty in here.</Text>
                <Pressable style={styles.browseHousesButton}>
                    <Text style={styles.buttonText}>browse houses</Text>
                </Pressable>
            </SafeAreaView>
            <Image style={styles.picture} source={EmptyNeighborhoodGraphic}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    whiteHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        marginBottom: 10,
        fontFamily: 'WorkSans-Regular',
    },
    background: {
        flex: 1,
        backgroundColor: '#40187B',
        justifyContent: 'center',
    },
    neighborhoodHeading: {
        height: 100
    },
    browseHousesButton: {
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        width: 274,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 10,
        height: 58,
        borderRadius: 29,
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Medium',
        color: 'white',
    },
    contentPanel: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        width: 213,
        height: 132,
        justifyContent: 'flex-end',
        position: 'absolute',
        top: 600,
        left: 175
    }
});

export default Neighborhood;