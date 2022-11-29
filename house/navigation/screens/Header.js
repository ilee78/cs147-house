import React, { useState } from 'react';
import { SafeAreaView, Text, Button, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList} from 'react-native';
import houseData from './house-data.json';
import BackIcon from '../../assets/back.js';


<SafeAreaView style={styles.screenBackground}>
            <SafeAreaView>
                <Pressable onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>

            <Text>{houseData[key].houseName}</Text>
            <Text>{houseData[key].milesAway} miles away</Text>
            <FlatList
                horizontal
                data={houseData[key].tags}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <ProfileItem item={item}/> }
            />

            <View style={styles.container}> 
            
            </View>

        </SafeAreaView>