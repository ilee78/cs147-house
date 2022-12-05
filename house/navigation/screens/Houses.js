import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable, ScrollView, FlatList, Image } from 'react-native';

import BackIcon from "../../assets/back.js";
import HouseIcon from './../../assets/house.js';
import ProfileIcon from './../../assets/profile-icon.js';

import houseData from '../../house-data.json';

import SfVoguersMap from '../../assets/duckwalkway.png';

function BrowsingScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text>houses screen</Text>
            <Pressable onPress={() => navigation.navigate("BrowseHouseLanding")}>
                <Text>browse house landing</Text>
            </Pressable>
        </SafeAreaView>
    );
}

function HouseLandingScreen({navigation}) {
    return(
        <ScrollView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon color='white'/>
                </Pressable>
                <SafeAreaView style={styles.infoPanel}>
                    <Pressable style={styles.houseIconBackground}>
                        <HouseIcon style={styles.houseIcon} color='white' size='45'/>
                    </Pressable>
                    <SafeAreaView>
                        <SafeAreaView style={styles.nameAndJoin}>
                            <Text id='houseName' style={styles.houseName}>{houseData[0].houseName}</Text>
                            <Pressable style={styles.joinButton} /*onPress={() => navigation.navigate("Houses")}*/>
                                <Text style={styles.buttonText}>join</Text>
                            </Pressable> 
                        </SafeAreaView>   
                        <Text id='milesAway' style={styles.smallText}>{houseData[0].milesAway} miles away</Text>
                        <SafeAreaView style={styles.tagPanel}>
                            <FlatList
                                id = 'tags'
                                horizontal
                                data={houseData[0].tags}
                                renderItem={({item}) => <Tags item={item}/> }
                                showsHorizontalScrollIndicator={false}
                            />
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.tabsPanel}>
                    <Pressable> 
                        <Text style={styles.selected}>
                            about
                        </Text>
                    </Pressable>
                    <Pressable> 
                        <Text style={styles.unselected}>
                            events
                        </Text>
                    </Pressable>
                    <Pressable> 
                        <Text style={styles.unselected}>
                            roommates
                        </Text>
                    </Pressable>
                </SafeAreaView>
                <SafeAreaView style={styles.aboutPanel}>
                    <Text style={styles.where}>where we are</Text>
                    <Text style={styles.smallText}>{houseData[0].address}</Text>
                    <Image style={styles.map} source={SfVoguersMap} />
                    <Text style={styles.aboutUs}>about us</Text>
                    <Text style={styles.smallText}>{houseData[0].about}</Text>
                    <SafeAreaView style={styles.moderatorsPanel}>
                        <Pressable style={styles.profileIconBackground}>
                            <ProfileIcon style={styles.profileIcon} color='white' size='24'/>
                        </Pressable>
                        <Text style={styles.moderatorText}>{houseData[0].moderators} is a moderator.</Text>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </ScrollView>
    );
}


const Tags = ({ item }) => {
    return (
        <View style={styles.tag}>
            <Pressable>
                <Text style={styles.tagText}>{item}</Text>   
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    },
    background: {
        flex: 1,
        backgroundColor: '#40187B'
    },
    topPanel: {
        flex: 1,
        textAlign: "left",
    },
    backIcon: {
        margin: 20,
        color: 'white'
    },
    infoPanel: {
        flex: 1,
        alignItems: 'left',
        marginLeft: 30,
        marginTop: 20,
    },
    houseIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 94,
        height: 94,
    },
    houseIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameAndJoin: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    houseName: {
        flex: 1,
        fontSize: 30,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 15,
        marginBottom: 5,
        color: 'white'
    },
    joinButton: {
        flex: 0,
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: 10,
        height: 32,
        borderRadius: 24,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#40187B',
        fontFamily: 'WorkSans-Regular'
    },
    smallText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginVertical: 5,
        color: 'white',
        maxWidth: '90%'
    },
    tagPanel: {
        flex: 1,
        marginTop: 5,
        justifyContent: 'left'
    },
    tag: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 30
    },
    tagText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        justifyContent: 'center',
    },
    tabsPanel: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        borderTopColor: 'white',
        borderBottomColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'space-evenly',
        width: '100%'
    },
    unselected: {
        flex: 1,
        color: '#C6C6C6',
        fontFamily: 'WorkSans-Regular',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20
    },
    selected: {
        flex: 1,
        color: '#47C8A7',
        fontFamily: 'WorkSans-Bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    aboutPanel: {
        padding: 20,
        marginLeft: 30
    },
    where: {
        color: 'white',
        fontFamily: 'WorkSans-Medium',
        fontSize: 20,
        marginBottom: 10
    },
    map: {
        width: 350,
        height: 160,
        marginTop: 10,
        borderRadius: 10
    },
    aboutUs: {
        color: 'white',
        fontFamily: 'WorkSans-Medium',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 40
    },
    profileIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 41,
        height: 41,
    },
    moderatorsPanel: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    moderatorText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginVertical: 5,
        marginLeft: 10,
        color: 'white',
    }
});

export { BrowsingScreen, HouseLandingScreen };