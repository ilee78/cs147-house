import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { EmptyNeighborhoodScreen, UserNeighborhoodScreen, BulletinScreen } from './screens/Neighborhood';
import { BrowsingScreen } from './screens/Houses';
import { ProfileScreen, EditProfileScreen, SettingsScreen } from './screens/Profile';
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
 *          - Profile (StackNavigator)
 *              - Edit Profile
 *              - Settings
 */

const MainStack = createNativeStackNavigator();

function Navigator() {
    return(
        <NavigationContainer>
            <MainStack.Navigator screenOptions={{headerShown: false}}>
                <MainStack.Screen name="Onboarding" component={Onboarding} />
                <MainStack.Screen name="Tabs" component={Tabs}/>
                <MainStack.Screen name="Houses" component={BrowsingScreen}/>
                <MainStack.Screen name="EmptyNeighborhood" component={EmptyNeighborhoodScreen}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#EFEFF0'},
            tabBarInactiveTintColor: '#707175',
            tabBarActiveTintColor: '#333333',
            tabBarActiveBackgroundColor: '#DEDEDE',
            tabBarInactiveBackgroundColor: '#EFEFF0',
        }}>
            <Tab.Screen name="Neighborhood" component={global.HOUSES.length == 0 ? EmptyNeighborhoodScreen : UserNeighborhood} options={{
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
                    <ProfileIcon size="24" color={color}/>
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

const NeighborhoodStack = createNativeStackNavigator();

function UserNeighborhood({navigation}) {
    return(
        <NeighborhoodStack.Navigator screenOptions={{headerShown: false}}>
            <NeighborhoodStack.Screen name="UserNeighborhood" component={UserNeighborhoodScreen}/>
            <NeighborhoodStack.Screen name="Bulletin" component={BulletinScreen}/>
        </NeighborhoodStack.Navigator>
    );
}

const HousesStack = createNativeStackNavigator();

function Houses({navigation}) {
    return(
        <HousesStack.Navigator screenOptions={{headerShown: false}}>
            <HousesStack.Screen name="Browse" component={BrowsingScreen}/>
        </HousesStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();

function Profile({navigation}) {
    return(
        <ProfileStack.Navigator screenOptions={{headerShown: false}}>
            <ProfileStack.Screen name="UserProfile" component={ProfileScreen}/>
            <ProfileStack.Screen name="EditProfile" component={EditProfileScreen}/>
            <ProfileStack.Screen name="Settings" component={SettingsScreen}/>
        </ProfileStack.Navigator>
    );
}

export default Navigator;