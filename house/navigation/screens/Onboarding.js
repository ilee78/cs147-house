import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectList } from 'react-native-dropdown-select-list';
import { SvgUri } from 'react-native-svg';
import logo from '../../assets/logo.png';

const OnboardingStack = createNativeStackNavigator();

function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
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

// TODO: handler for name passed in + storing it, progress bar
function NameScreen({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text style={styles.headerText}>what is your name?</Text>
            <TextInput 
            style={styles.textInput} 
            placeholder='enter name...'
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate("Location")}>
                <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

// TODO: handler, progress bar, back button
// https://github.com/danish1658/react-native-dropdown-select-list 
function LocationScreen({navigation}) {
    
    const [selected, setSelected] = useState("");
    const data = [{key:'1', value:'San Francisco, CA'},]

    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text style={styles.headerText}>where are you based?</Text>
            <SelectList 
                boxStyles={styles.locationInput}
                placeholder='search locations...'
                fontFamily='WorkSans-MediumItalic'
                buttonStyle={styles.textInput}
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate("Travel")}>
                <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

// TODO: handler, progress bar, back button
function TravelScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text style={styles.headerText}>how far are you willing to travel?</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Interest")}>
                <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

// TODO: handler, progress bar, back button
function InterestScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text style={styles.headerText}>what are your interests?</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Unpacking")}>
                <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

// TODO: handler, progress bar, back button
function UnpackingScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <Text style={styles.headerText}>unpacking...</Text>
        </SafeAreaView>
    );
}

// TODO: need some sort of trigger after unpacking to lead to tab navigator
// maybe need root stack https://stackoverflow.com/questions/52123937/go-to-a-page-on-another-file-in-react-navigation-react-native

function Onboarding({navigation}) {
    return(
        <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
            <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
            <OnboardingStack.Screen name="Name" component={NameScreen} />
            <OnboardingStack.Screen name="Location" component={LocationScreen} />
            <OnboardingStack.Screen name="Travel" component={TravelScreen} />
            <OnboardingStack.Screen name="Interest" component={InterestScreen} />
            <OnboardingStack.Screen name="Unpacking" component={UnpackingScreen} />
        </OnboardingStack.Navigator>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
        paddingHorizontal: 20,
        paddingVertical: 12,
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
    }
});

export default Onboarding;
