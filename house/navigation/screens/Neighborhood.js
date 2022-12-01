import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable, Image } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from 'react-native-sidebar';
import EmptyNeighborhoodGraphic from '../../assets/boxesGraphic.png';
import LinesIcon from '../../assets/lines.png';

//const Drawer = createDrawerNavigator();

function Neighborhood({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.neighborhoodHeading}>
                <Pressable>
                    <Image style={styles.menuIcon} source={LinesIcon}/>
                </Pressable>
                <Text style={styles.headingText}>neighborhood</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Text style={styles.whiteText}>it's empty in here.</Text>
                <Pressable style={styles.browseHousesButton}>
                    <Text style={styles.buttonText}>browse houses</Text>
                </Pressable>
            </SafeAreaView>
            <Image style={styles.boxesImage} source={EmptyNeighborhoodGraphic}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    whiteText: {
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    headingText: {
        fontSize: 36,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'WorkSans-Bold',
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
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxesImage: {
        width: 213,
        height: 132,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 40,
        right: 40
    },
    menuIcon: {
        width: 30,
        height: 18,
        padding: 10,
        marginLeft: 35,
        marginRight: 30,
    }
});

export default Neighborhood;