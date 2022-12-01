import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, StyleSheet, Pressable, ScrollView, FlatList, SectionList } from 'react-native';
import ProfileIcon from './../../assets/profile-icon.js';
import EditIcon from './../../assets/edit.js';
import SettingsIcon from './../../assets/gear.js';
import HouseIcon from './../../assets/house.js';
import MusicIcon from './../../assets/music.js';
import BackIcon from "../../assets/back.js";
import PlusIcon from "../../assets/plus.js"


/* TODO
 *  add + icon back to tags
 */

function ProfileScreen({navigation}) {

    return(
        <ScrollView style={styles.background}>
                <Pressable style={styles.settingsIcon} onPress={() => navigation.navigate("Settings")}>
                    <SettingsIcon color="#61646B" size="24" />
                </Pressable>
                <SafeAreaView style={styles.profilePanel}>
                    <Pressable style={styles.profileBackground}>
                        <ProfileIcon style={styles.profileIcon} color='#FFFFFF' size='58'/>
                    </Pressable>
                    <SafeAreaView style={styles.namePanel}>
                        <Text style={styles.name}>{global.USERNAME}</Text> 
                        <Pressable style={styles.editIcon}>
                            <EditIcon color="#61646B" size="24" onPress={() => navigation.navigate("EditProfile")}/>
                        </Pressable>
                    </SafeAreaView>
                    <TextInput id='bioText' style={styles.bioText}></TextInput>
                </SafeAreaView>
                <SafeAreaView style={styles.tagPanel}>
                    <Text style={styles.sectionHeading}>tags</Text>
                    <FlatList
                        horizontal
                        data={global.TAGS}
                        renderItem={({item}) => <Tags item={item}/> }
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
                <SafeAreaView style={styles.housesPanel}>
                    <Text style={styles.sectionHeading}>my houses</Text>
                    <FlatList
                        horizontal
                        data={global.HOUSES}
                        renderItem={({item}) => <Houses item={item}/> }
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
                <SafeAreaView style={styles.songsPanel}>
                    <Text style={styles.sectionHeading}>songs i'm listening to</Text>
                    <Songs />
                </SafeAreaView>
        </ScrollView>
    );
}

function EditProfileScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

function SettingsScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const Tags = ({ item }) => {
    return (
        <View style={item == "+" ? styles.addTag : styles.tag}>
            <Pressable>
                <Text style={styles.tagText}>{item}</Text>   
            </Pressable>
        </View>
    );
};

const Houses = ({ item }) => {
    return (
        <View style={styles.house}>
            <Pressable>
                <Text style={{fontSize:40, color: 'white', textAlign: 'center'}}>+</Text>
                <Text style={styles.houseText}>{item}</Text>
            </Pressable>
        </View>
    );
}

const Songs = () => {

    function RenderSongs() {
        return global.SONGS.map((item) => {
            return(    
                <View style={styles.songs}>
                    <MusicIcon color="#40187B" size="24"/>
                    <Text style={styles.songNameText}>{item.song}
                        <Text style={styles.songArtistText}> {item.artist}</Text>
                    </Text>
                </View>
            );
        });
    }

    return(
        <RenderSongs/>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    topPanel: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        textAlign: "left",
    },
    profilePanel: {
        //flex: 1, comment this back in after we add in more panels
        alignItems: 'center',
        justifyContent: 'center'
    },
    namePanel: {
        flexDirection: 'row',
    },
    tagPanel: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
    },
    housesPanel: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
    },
    songsPanel: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
    },
    settingsIcon: {
        alignSelf: 'flex-end',
        margin: 15,
    },
    profileBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 120,
        height: 120,
    },
    profileIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
    },
    editIcon: {
        paddingTop: 23,
        paddingLeft: 20
        // THIS IS SO JANK
    },
    tag: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        padding: 10,
    },
    addTag: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#FDC765',
        borderWidth: 1,
        borderColor: '#FDC765',
        borderRadius: 100,
        padding: 10,
        paddingHorizontal: 15,
    },
    tagText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        justifyContent: 'center',
    },
    sectionHeading: {
        fontSize: 24,
        fontFamily: 'WorkSans-Regular',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    house: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#40187B',
        borderWidth: 1,
        borderColor: '#40187B',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 94,
        minWidth: 94,
        minHeight: 120,
        maxHeight: 120
    },
    houseText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'WorkSans-Regular',
        paddingTop: 8,
        fontSize: 16
    },
    plusIcon : {
        margin: 30,
    },
    songs: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12
    },
    songNameText: {
        color: '#61646B',
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        paddingLeft: 15
    },
    songArtistText: {
        color: '#61646B',
        fontsize: 16,
        fontFamily: 'WorkSans-Regular'
    },
    browseHousesButton: {
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        height: 37,
        borderRadius: 28,
    },
    emptyText: {
        fontSize: 14,
        fontFamily: 'WorkSans-Regular',
        color: '#61646B'
    },
    bioText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        textAlign: 'center',
        borderColor: '#AFB1B6',
        padding: 21,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        marginLeft: 30,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        minWidth: '80%' // TODO: change this to stretch 
    },
    backIcon: {
        margin: 20,
    },
});

export { ProfileScreen, EditProfileScreen, SettingsScreen };