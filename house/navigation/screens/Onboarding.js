import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectList } from 'react-native-dropdown-select-list';
import Slider from '@react-native-community/slider';
import { SvgUri } from 'react-native-svg';
import Logo from '../../assets/logo.png';
import BackIcon from '../../assets/back.js';

// Global variable - bad style lol, change later
var USERNAME = '';
var LOCATION = '';
var DISTANCE = 0;

// TODO: logo as SVG (svg -> js)
// TODO: progress bars for all the screens 

function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.headerText}>
                    welcome to
                    <Text style={styles.houseText}> house</Text>
                </Text>
                <Text style={styles.bodyText}>help us get to know you better with a few questions!</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Name")}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

function NameScreen({navigation}) {
    const [username, setUsername] = useState('');
    function nameInputHandler(name) {
        setUsername(name);
        USERNAME = name;
    }

    return (
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.headerText}>what is your name?</Text>
                <TextInput 
                style={styles.textInput} 
                placeholder='enter name...'
                onChangeText={name => nameInputHandler(name)}
                />
                <Pressable style={styles.button} onPress={() => navigation.navigate("Location")}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

// https://github.com/danish1658/react-native-dropdown-select-list 
function LocationScreen({navigation}) {
    
    const [selected, setSelected] = useState('');
    function locationInputHandler(location) {
        setSelected(location);
        LOCATION = location;
    }

    const data = [{key:'1', value:'San Francisco, CA'},]

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.headerText}>
                    hi
                    <Text style={styles.houseText}> {USERNAME}</Text>! where are you based?
                </Text>
                <SelectList 
                    boxStyles={styles.locationInput}
                    placeholder='search locations...'
                    fontFamily='WorkSans-MediumItalic'
                    buttonStyle={styles.textInput}
                    setSelected={(val) => locationInputHandler(val)}
                    data={data}
                    save="value"
                />
                <Pressable style={styles.button} onPress={() => navigation.navigate("Travel")}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>

        </SafeAreaView>
    );
}

// BRUH THIS SLIDER LOOKS GOOFY AS FUCK HAHAHAHAHAHA
// TODO: fix the damn slider
function TravelScreen({navigation}) {

    const [distance, setDistance] = useState(0);

    function distanceInputHandler(dist) {
        setDistance(dist);
        DISTANCE = dist;
    }

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.headerText}>how far are you willing to travel?</Text>
                <Slider 
                style={styles.slider}
                onValueChange={(value) => distanceInputHandler(value)}
                minimumValue={0}
                maximumValue={50}
                step={1}
                thumbTintColor='#40187B'
                minimumTrackTintColor='#40187B'
                maximumTrackTintColor='#C6C6C6'
                />
                <Text style={styles.sliderText}>{distance} mi</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Interest")}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

// TODO: handler
function InterestScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.headerText}>what are your interests?</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Unpacking")}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

// TODO: handler, progress bar, back button
function UnpackingScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.headerText}>unpacking...</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Tabs")}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    topPanel: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        textAlign: 'left'
    },
    contentPanel: {
        flex: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 86,
        height: 96,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 22,
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        marginHorizontal: 46,
        paddingBottom: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Regular',
    },
    houseText: {
        fontSize: 24,
        color: '#FB749B',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Regular',
    },
    bodyText: {
        fontSize: 20,
        color: '#61646B',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Regular',
        marginLeft: 46,
        marginRight: 46,
    },
    button: {
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        width: 128,
        height: 45,
        borderRadius: 24,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#AFB1B6',
        width: '80%',
        padding: 12,
        borderRadius: 8,
        fontFamily: 'WorkSans-MediumItalic'
    },
    locationInput: {
        borderWidth: 1,
        borderColor: '#AFB1B6',
        padding: 12,
        borderRadius: 8,
        fontFamily: 'WorkSans-MediumItalic'
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Medium',
        color: 'white',
    },
    backIcon: {
        margin: 20,
    },
    slider: {
        width: 300,
    },
    sliderText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export { WelcomeScreen, NameScreen, LocationScreen, TravelScreen, InterestScreen, UnpackingScreen };
