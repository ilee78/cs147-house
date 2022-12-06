import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable, ScrollView, FlatList, Image, useWindowDimensions } from 'react-native';

import BackIcon from "../../assets/back.js";
import HouseIcon from './../../assets/house.js';
import ProfileIcon from './../../assets/profile-icon.js';
import PinIcon from '../../assets/pin.js';

import houseData from '../../house-data.json';

import SfVoguersMap from '../../assets/duckwalkway.png';

// Global variable - bad style lol, change later
var ID = "";

const BrowseItem = ({ item }) => {
    return (
      <View style={browseStyles.browseTag}>
        <Text style={browseStyles.tagText}>{item}</Text>   
      </View>
    );
};

const ProfileItem = ({ item }) => {
    return (
      <View style={browseStyles.profileTag}>
        <Text style={browseStyles.tagText}>{item}</Text>   
      </View>
    );
};


function BrowsingScreen({navigation}) {
    const [selected, setSelected] = useState('');

    function houseHandler(house) {
        setSelected(house);
        ID = num;
    }

    return(
        <SafeAreaView style={browseStyles.housesPanel}>
            <FlatList 
                style={browseStyles.housesFlatList}
                data={houseData}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <SafeAreaView>
                    <Pressable style={browseStyles.houseListing} onPress={() => {navigation.navigate("BrowseHouseLanding"); ID = item.key}}>
                        <Pressable style={browseStyles.tempIconBackground}>
                            <ProfileIcon style={styles.profileIcon} color='white' size='24'/>
                        </Pressable>
                        <SafeAreaView style={browseStyles.houseInfo}>
                            <Text style={browseStyles.houseName}>{item.houseName}</Text>
                            <Text style={browseStyles.milesAway}>{item.milesAway} miles away</Text>
                            <FlatList
                                style={{flexDirection : "row", flexWrap : "wrap"}}
                                data={item.tags}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => <BrowseItem item={item}/> }
                            />
                        </SafeAreaView> 
                    </Pressable>
                </SafeAreaView>
                }
            />
        </SafeAreaView>
    );
}


function HouseLandingScreen({navigation}) {
    var key = ID;
    //var joined = houseData[key].userJoined;

    // tabs data
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

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
                            <Text id='houseName' style={styles.houseName}>{houseData[key].houseName}</Text>
                            <Pressable style={styles.joinButton} /*onPress={() => navigation.navigate("Houses")}*/>
                                <Text style={styles.buttonText}>join</Text>
                            </Pressable> 
                        </SafeAreaView>   
                        <SafeAreaView style={styles.distance}> 
                            <SafeAreaView style={styles.pinIcon}>
                                <PinIcon color='white' width='12' height='14'/>
                            </SafeAreaView>
                            <Text id='milesAway' style={styles.smallText}>{houseData[key].milesAway} miles away</Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.tagPanel}>
                            <FlatList
                                id = 'tags'
                                horizontal
                                data={houseData[key].tags}
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
                    <Text style={styles.smallText}>{houseData[key].address}</Text>
                    <Image style={styles.map} source={SfVoguersMap} />
                    <Text style={styles.aboutUs}>about us</Text>
                    <Text style={styles.smallText}>{houseData[key].about}</Text>
                    <SafeAreaView style={styles.moderatorsPanel}>
                        <Pressable style={styles.profileIconBackground}>
                            <ProfileIcon style={styles.profileIcon} color='white' size='24'/>
                        </Pressable>
                        <Text style={styles.moderatorText}>{houseData[key].moderators} is a moderator.</Text>
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
    pinIcon: {
        marginRight: 7
    },
    distance: {
        flexDirection: 'row',
        alignItems: 'center'
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
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    selected: {
        flex: 1,
        color: '#47C8A7',
        fontFamily: 'WorkSans-Bold',
        fontSize: 20,
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

const browseStyles = StyleSheet.create({
    housesPanel: {
        flex: 1,
        backgroundColor: '#40187B'
    },
    housesFlatList: {
        paddingTop: 20,
    },
    houseListing: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'left',
    },
    houseInfo: {
        flex: 1
    },
    tempIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 60,
        height: 60,
        marginRight: 10
    },
    button: {
        height: 45,
        paddingVertical: 16,
        paddingHorizontal: 12, 
        fontSize: 18,
        color: "#FDC765",
        borderRadius: 24,
        borderWidth: 1,
    },
    tagPanel: {
        flex: 1,
    },
    browseTag: {
        marginRight: 8,
        marginTop: 8,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        padding: 10
    },
    tagText: {
        textAlign: 'center',
        fontSize: 14,
        color: "000",
        fontFamily: "WorkSans-Medium"
    },
    houseName: {
        fontFamily: "WorkSans-Regular",
        fontSize: 20
    },
    distance: {
        fontFamily: "WorkSans-Regular",
        fontSize: 14,
    }
});

export { BrowsingScreen, HouseLandingScreen };