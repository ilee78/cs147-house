import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Neighborhood from './screens/Neighborhood';
import Houses from './screens/Houses';
import Profile from './screens/Profile';
import { WelcomeScreen, NameScreen, LocationScreen, TravelScreen, InterestScreen, UnpackingScreen } from './screens/Onboarding.js';

// Icons
import NeighborhoodIcon from '../assets/neighborhood-icon.js';
import HousesIcon from '../assets/houses-icon.js'
import ProfileIcon from '../assets/profile-icon.js'

/*
 * Navigation Structure:
 * MainStack (StackNavigator)
 *      - Onboarding (StackNavigator)
 *          - WelcomeScreen
 *          - NameScreen
 *          - LocationScreen
 *          - TravelScreen
 *          - InterestScreen
 *          - UnpackingScreen
 *      - Tabs (TabNavigator)
 *          - Neighborhood  -- FYI: each of these tabs will need a stack navigator
 *          - Public Houses
 *          - Profile
 */

const MainStack = createNativeStackNavigator();

function Navigator() {
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{headerShown: false}}>
                <MainStack.Screen 
                name="Onboarding"
                component={Onboarding}
                />
                <MainStack.Screen name="Tabs" component={Tabs}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();

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
            <Tab.Screen name="Houses" component={Houses} options={{
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
    )
}

const OnboardingStack = createNativeStackNavigator();

function Onboarding({navigation}) {
    return(
        <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
            <OnboardingStack.Screen name="Welcome" component={WelcomeScreen} />
            <OnboardingStack.Screen name="Name" component={NameScreen} />
            <OnboardingStack.Screen name="Location" component={LocationScreen} />
            <OnboardingStack.Screen name="Travel" component={TravelScreen} />
            <OnboardingStack.Screen name="Interest" component={InterestScreen} />
            <OnboardingStack.Screen name="Unpacking" component={UnpackingScreen} />
        </OnboardingStack.Navigator>
    );
}

export default Navigator;