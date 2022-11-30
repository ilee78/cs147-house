import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import ProfileIcon from './../../assets/profile-icon.js';
import EditIcon from './../../assets/edit.js';
import SettingsIcon from './../../assets/gear.js';

function Profile({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <Pressable style={styles.settingsIcon}>
                    <SettingsIcon color="#61646B" size="36" />
                </Pressable>
                <SafeAreaView style={styles.profilePanel}>
                    <Pressable style={styles.profileBackground}>
                        <ProfileIcon style={styles.profileIcon} color='#FFFFFF' size='58'/>
                    </Pressable>
                    <SafeAreaView style={styles.namePanel}>
                        <Text style={styles.name}>john d.</Text> 
                        <Pressable style={styles.editIcon}>
                            <EditIcon color="#61646B"/>
                        </Pressable>
                    </SafeAreaView>
                    <Text style={styles.bioText}>this is a bio. it can be short or long, whatever you like! </Text>
                </SafeAreaView>
                <SafeAreaView style={styles.tagPanel}>
                    <Text style={styles.sectionHeading}>tags</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.housesPanel}>
                    <Text style={styles.sectionHeading}>my houses</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.songsPanel}>
                    <Text style={styles.sectionHeading}>songs i'm listening to</Text>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
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
        marginTop: 14
    },
    housesPanel: {
        flex: 1,
        marginTop: 14
    },
    songsPanel: {
        flex: 1,
        marginTop: 14
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
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        justifyContent: 'center',
        backgroundColor: '#FFEBC6',
    },
    sectionHeading: {
        fontSize: 24,
        fontFamily: 'WorkSans-Regular',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: 30
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
        flexWrap: 'wrap'
    }
});

export default Profile;