import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectList } from 'react-native-dropdown-select-list';
import Slider from '@react-native-community/slider';
import { SvgUri } from 'react-native-svg';
import Logo from '../../assets/logo.png';
import BackIcon from '../../assets/back.js';

import styles from '../../styles.js'
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
                <Text style={styles.headerText}>how far are you willing to travel for events?</Text>
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

const SECTIONS = [
  {
    title: 'dance genres',
    data: [
      {
        key: '1',
        text: 'Item text 1',
      },
      {
        key: '2',
        text: 'Item text 2',
      },

      {
        key: '3',
        text: 'Item text 3',
      },
      {
        key: '4',
        text: 'Item text 4',
      },
      {
        key: '5',
        text: 'Item text 5',
      },
    ],
  },
  {
    title: 'goals',
    data: [
      {
        key: '1',
        text: 'Item text 1',
      },
      {
        key: '2',
        text: 'Item text 2',
      },

      {
        key: '3',
        text: 'Item text 3',
      },
      {
        key: '4',
        text: 'Item text 4',
      },
      {
        key: '5',
        text: 'Item text 5',
      },
    ],
  },
  {
    title: 'anything else?',
    data: [
      {
        key: '1',
        text: 'Item text 1',
      },
      {
        key: '2',
        text: 'Item text 2',
      },

      {
        key: '3',
        text: 'Item text 3',
      },
      {
        key: '4',
        text: 'Item text 4',
      },
      {
        key: '5',
        text: 'Item text 5',
      },
    ],
  },
];


const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

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
                <Text style={styles.headerText}>tell us about yourself!</Text>
                <Text style={styles.bodyText}>choose up to 5 interests to put on your profile</Text>
                
                <View style={styles.container}>
                    <StatusBar style="light" />
                    <SafeAreaView style={{ flex: 1 }}>
                        <SectionList
                            contentContainerStyle={{ paddingHorizontal: 12 }}
                            stickySectionHeadersEnabled={false}
                            scrollEnabled={false}
                            sections={SECTIONS}
                            renderSectionHeader={({ section }) => (
                                <>
                                    <Text style={styles.sectionHeader}>{section.title}</Text>
                                    <FlatList
                                        horizontal
                                        data={section.data}
                                        renderItem={({item}) => <ListItem item={item}/> }
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </>
                            )}
                            renderItem={({ item, section }) => {
                                return null;
                                return <ListItem item={item} />;
                            }}
                        />
                    </SafeAreaView>
                </View>

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

export { WelcomeScreen, NameScreen, LocationScreen, TravelScreen, InterestScreen, UnpackingScreen };
