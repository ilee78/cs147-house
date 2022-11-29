import React, { useState } from 'react';
import { SafeAreaView, Text, Button, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList} from 'react-native';
import houseData from './house-data.json';
import BackIcon from '../../assets/back.js';


// Global variable - bad style lol, change later
var ID = "";

const BrowseItem = ({ item }) => {
    return (
      <View style={styles.browseTag}>
        <Text style={styles.tagText}>{item}</Text>   
      </View>
    );
};

const ProfileItem = ({ item }) => {
    return (
      <View style={styles.profileTag}>
        <Text style={styles.tagText}>{item}</Text>   
      </View>
    );
};


function HousesScreen({navigation}) {
    const [selected, setSelected] = useState('');

    function houseHandler(house) {
        setSelected(house);
        ID = num;
    }

    return(
        <View>
            <Text>hi um uwu this is the discover tab </Text>
            <FlatList 
                data={houseData}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View >
                    <Pressable style={styles.option} onPress={() => {navigation.navigate('HouseProfile'); ID = item.key}}>
                        <Text> {item.houseName} </Text>
                        <Text>{item.milesAway} miles away </Text>
                        <FlatList 
                            horizontal
                            data={item.tags}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => <BrowseItem item={item}/> }
                        />
                    </Pressable>
                </View>
                }
            />
        </View>
    );
}

// TODO: three tabs of scrolling information
// TODO: stylize static header
function HouseProfileScreen({navigation}) {
    var key = ID;
    var joined = houseData[key].userJoined;

    // tabs data
    const events = houseData[key].events;

    return null;
}



// setSelected={(title) => houseHandler(title)}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#40187B",
    },
    screenBackground: {
        color: "#40187B",
    },
    option: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 24,
        padding: 10,
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
    browseTag: {
        marginHorizontal: 12,
        marginVertical: 8,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        padding: 10
    },
    profileTag: {
        marginHorizontal: 6,
        marginVertical: 8,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        padding: 10
    },
    tagText: {
        textAlign: 'center',
        fontSize: 12,
        color: "000",
    }
});

export { HousesScreen, HouseProfileScreen};