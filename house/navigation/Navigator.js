import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Neighborhood from './screens/Neighborhood';
import { HousesScreen, HouseProfileScreen } from './screens/Discover';
import Profile from './screens/Profile';

// Icons
import NeighborhoodIcon from '../assets/neighborhood-icon.js';
import HousesIcon from '../assets/houses-icon.js'
import ProfileIcon from '../assets/profile-icon.js'

const neighborhoodName = 'neighborhood';
const housesName = 'houses';
const profileName = 'profile';

/*
 * Navigation Structure:
 * MainStack (StackNavigator)
 *      - Tabs (TabNavigator)
 *          - Neighborhood  -- FYI: each of these tabs will need a stack navigator
 *          - Discover Houses
 *              - House Profile 
 *          - Profile
 */

const MainStack = createNativeStackNavigator();

function Navigator() {
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{headerShown: false}}>
                <MainStack.Screen name="Tabs" component={Tabs}/>
                <MainStack.Screen name="Discover" component={DiscoverScreen}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

const DiscoverStack = createNativeStackNavigator();

function DiscoverScreen({navigation}) {
    return(
        <DiscoverStack.Navigator screenOptions={{headerShown: false}}>
            <DiscoverStack.Screen name="Houses" component={HousesScreen} />
            <DiscoverStack.Screen name="HouseProfile" component={HouseProfileScreen} />
        </DiscoverStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

// TODO: need a stack navigator for each tab https://reactnavigation.org/docs/tab-based-navigation/#a-stack-navigator-for-each-tab 

function Tabs() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: true,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#EFEFF0'},
            tabBarInactiveTintColor: '#707175',
            tabBarActiveTintColor: '#333333',
            tabBarActiveBackgroundColor: '#DEDEDE',
            tabBarInactiveBackgroundColor: '#EFEFF0',
        }}>

        <Tab.Screen name="Neighborhood" component={Neighborhood} options={{
            tabBarIcon: ({color, size}) => (
                <NeighborhoodIcon color={color} />
            )
        }}/>
        <Tab.Screen name="Discover" component={DiscoverScreen} options={{
            tabBarIcon: ({color, size}) => (
                <HousesIcon color={color}/>
            )
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({color, size}) => (
                <ProfileIcon color={color}/>
            )
        }}/>

        </Tab.Navigator>
    );
}

export default Navigator;