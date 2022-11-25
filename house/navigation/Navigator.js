import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Neighborhood from './screens/Neighborhood';
import Houses from './screens/Houses';
import Profile from './screens/Profile';

const neighborhoodName = 'neighborhood';
const housesName = 'houses';
const profileName = 'profile';

const Tab = createBottomTabNavigator();

// TODO: need a stack navigator for each tab https://reactnavigation.org/docs/tab-based-navigation/#a-stack-navigator-for-each-tab 

function Navigator() {
    return(
        // setting headerShown to 'false' makes text cut off at top of screen
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: {backgroundColor: '#EFEFF0'},
                tabBarInactiveTintColor: '#707175',
                tabBarActiveTintColor: '#333333',
                tabBarActiveBackgroundColor: '#DEDEDE',
                tabBarInactiveBackgroundColor: '#EFEFF0',
            }}>

            <Tab.Screen name={neighborhoodName} component={Neighborhood} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home-outline" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={housesName} component={Houses} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="search-outline" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen name={profileName} component={Profile} options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person-outline" color={color} size={size}/>
                )
            }}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;