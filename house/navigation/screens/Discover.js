import React, { useState } from 'react';
import { SafeAreaView, Text, Button, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HousesScreen({navigation}) {
    return(
        <View>
            <Text>hi what's going on</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('HouseProfile')}
            />
        </View>
    );
}

function HouseProfileScreen({navigation}) {
    return(
        <View>
            <Text>profile for a house</Text>
            <Button
                title="Go back"
                onPress={() => navigation.navigate('Houses')}
            />
        </View>
    );
}

// const styles = StyleSheet.create({});

export { HousesScreen, HouseProfileScreen };