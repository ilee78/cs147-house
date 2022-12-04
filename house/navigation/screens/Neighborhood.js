import React, { useState, useEffect, useCallback } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable, Image, FlatList, ScrollView } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from 'react-native-sidebar';

import HouseData from '../../house-data.json';

import EmptyNeighborhoodGraphic from '../../assets/boxesGraphic.png';
import LinesIcon from '../../assets/lines.png';
import HouseMint from '../../assets/house-mint.png';
import HousePink from '../../assets/house-pink.png';
import HouseYellow from '../../assets/house-yellow.png';
import OwnedHouseMint from '../../assets/ownedHouse-Mint.png';
import OwnedHousePink from '../../assets/ownedHouse-Pink.png';
import OwnedHouseYellow from '../../assets/ownedHouse-Yellow.png';
import Bulletin from '../../assets/bulletinBoard.png'
import BulletinNotif from '../../assets/bulletinBoard-Notif.png'
import HouseProfileImg from '../../assets/houseProfileImg.jpg'

//const Drawer = createDrawerNavigator();

function EmptyNeighborhoodScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.neighborhoodHeading}>
                <Pressable>
                    <Image style={styles.menuIcon} source={LinesIcon}/>
                </Pressable>
                <Text style={styles.headingText}>neighborhood</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.centerContentPanel}>
                <Text style={styles.whiteText}>it's empty in here.</Text>
                <Pressable style={styles.browseHousesButton} onPress={() => navigation.navigate("Houses")}>
                    <Text style={styles.buttonText}>browse houses</Text>
                </Pressable>
            </SafeAreaView>
            <Image style={styles.boxesImage} source={EmptyNeighborhoodGraphic}/>
        </SafeAreaView>
    );
}

function UserNeighborhoodScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.neighborhoodHeading}>
                <Pressable>
                    <Image style={styles.menuIcon} source={LinesIcon}/>
                </Pressable>
                <Text style={styles.headingText}>neighborhood</Text>
            </SafeAreaView>
            <SafeAreaView style={{flex: 8}}>
                <FlatList
                ListHeaderComponent={
                <Pressable style={styles.bulletinPanel}>
                    <Image style={styles.bulletinImage} source={global.NOTIFCOUNT > 0 ? BulletinNotif : Bulletin}/>
                    {global.NOTIFCOUNT > 0 ? <Text style={styles.notifCount}>{global.NOTIFCOUNT > 98 ? 99 : global.NOTIFCOUNT}</Text> : <Text></Text>}
                </Pressable>
                }
                vertical
                numColumns={2}
                data={global.HOUSES}
                renderItem={({item}) => <UserHouses item={item}/> }
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={styles.neighborhoodList}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
}

const UserHouses = ({ item }) => {
    return (
        <Pressable style={styles.houseDisplay}>
            <SafeAreaView>
                <SafeAreaView style={styles.houseNameContainer}>
                    <Text style={styles.houseNameText}>{HouseData[item].houseName}</Text>
                </SafeAreaView>
            <SafeAreaView style={styles.horizontalGraphicsContainer}>
                <HouseIllustration item={item}></HouseIllustration>
                <HouseProfilePicture item={item}></HouseProfilePicture>
            </SafeAreaView>
            </SafeAreaView>
        </Pressable>
    );
};

const HouseIllustration = ({ item }) => {
    if (global.OWNEDHOUSES.includes(item)) {
        switch (HouseData[item].color) {
            case 'yellow':
                return (<Image style={styles.houseIllustration} source={OwnedHouseYellow}></Image>);
            case 'pink':
                return (<Image style={styles.houseIllustration} source={OwnedHousePink}></Image>);
            case 'mint':
                return (<Image style={styles.houseIllustration} source={OwnedHouseMint}></Image>);
        }
    }
    switch (HouseData[item].color) {
        case 'yellow':
            return (<Image style={styles.houseIllustration} source={HouseYellow}></Image>);
        case 'pink':
            return (<Image style={styles.houseIllustration} source={HousePink}></Image>);
        case 'mint':
            return (<Image style={styles.houseIllustration} source={HouseMint}></Image>);
    }
};

const HouseProfilePicture = ({ item }) => {
    switch (HouseData[item].profileImg) {
        case 'houseProfileImg.jpg':
            return (<Image style={styles.houseProfileImage} source={HouseProfileImg}></Image>);
    }
};

function BulletinScreen({navigation}) {
    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#40187B',
    },
    boxesImage: {
        width: 213,
        height: 132,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 40,
        right: 40
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
    bulletinImage: {
        width: 218,
        height: 135,
    },
    bulletinPanel: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    centerContentPanel: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'WorkSans-Medium',
    },
    contentPanel: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'WorkSans-Medium',
        scrollY: true,
    },
    headingText: {
        fontSize: 36,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'WorkSans-Bold',
    },
    horizontalGraphicsContainer: {
        flexDirection: 'row'
    },
    houseDisplay: {
        width: '30%',
        marginHorizontal: '10%',
        marginVertical: 8,
        justifyContent: 'flex-end',
        paddingVertical: 5,
    },
    houseIllustration: {
        width: 130,
        height: 167,
        bottom: 10,
    },
    houseNameContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 5
    },
    houseNameText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    houseProfileImage: {
        width: 45,
        height: 45,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: 'white',
        right: 52
    },
    menuIcon: {
        width: 30,
        height: 18,
        padding: 10,
        marginLeft: 35,
        marginRight: 30,
    },
    neighborhoodHeading: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    neighborhoodList: {
        alignSelf: 'center',
    },
    notifCount: {
        left: 74,
        bottom: 123,
        fontSize: 24,
        color: 'white',
    },
    whiteText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        marginBottom: 10,
        fontFamily: 'WorkSans-Regular',
    },
});

export { EmptyNeighborhoodScreen, UserNeighborhoodScreen, BulletinScreen };