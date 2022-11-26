import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Pressable, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SvgUri } from 'react-native-svg';
import logo from '../../assets/logo.svg';

const OnboardingStack = createNativeStackNavigator();

function WelcomeScreen({navigation}) {
    // TODO: figure out how to put logo
    // TODO: import font https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4 
    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.headerText}>
                welcome to
                <Text style={styles.houseText}> house</Text>
            </Text>
            <Text style={styles.bodyText}>help us get to know you better with a few questions!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Name")}>
                <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

function NameScreen({navigation}) {
    return (
        <SafeAreaView styles={styles.background}>
            <Text>hello</Text>
        </SafeAreaView>
    )
}

function Onboarding({navigation}) {
    return(
        <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
            <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
            <OnboardingStack.Screen name="Name" component={NameScreen} />
        </OnboardingStack.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        paddingBottom: 18,
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
    },
    houseText: {
        fontSize: 24,
        color: '#FB749B',
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
    },
    bodyText: {
        fontSize: 20,
        color: '#61646B',
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        marginLeft: 46,
        marginRight: 46
    },
    button: {
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 24
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        color: 'white'
    }
});

export default Onboarding;
