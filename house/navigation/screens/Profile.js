import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import ProfileIcon from './../../assets/profile-icon.js';
import EditIcon from './../../assets/edit.js';

function Profile({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.profilePanel}>
                <Pressable style={styles.profileBackground}>
                    <ProfileIcon style={styles.profileIcon} color='#FFFFFF' size='58'/>
                </Pressable>
                <SafeAreaView style={styles.namePanel}>
                    <Text style={styles.name}>john d.</Text> 
                    <Pressable style={styles.editIcon}>
                        <EditIcon />
                    </Pressable>
                </SafeAreaView>
                <Text style={styles.bioText}>this is a bio. it can be short or long, whatever you like!</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.tagPanel}>
                {/* add tags here btw can we have the tags header just be the same as the houses and songs headers for Consistency */} 
            </SafeAreaView>
            {/* another panel for my houses */}
            {/* another panel for songs im listening to */} 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    profilePanel: {
        //flex: 1, comment this back in after we add in more panels
        marginTop: 51,
        alignItems: 'center',
        justifyContent: 'center'
    },
    namePanel: {
        flexDirection: 'row',
    },
    tagPanel: {
        //flex: 1,
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
        paddingTop: 20,
        // this looks jank fix it later
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
        maxWidth: '80%',
        minWidth: '80%', 
        //flexShrink: 1,
        flexWrap: 'wrap'
    }
});

export default Profile;