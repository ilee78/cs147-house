import React, { useState } from 'react';
import { SafeAreaView, Text, Button, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList} from 'react-native';
import houseData from './house-data.json';
import BackIcon from '../../assets/back.js';


// Global variable - bad style lol, change later
var HOUSE = "";

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
                    <Pressable style={styles.button} onPress={() => {navigation.navigate('HouseProfile'); ID = item.key}}>
                        <Text> {item.houseName} </Text>
                    
                    </Pressable>
                    <Text>{item.milesAway} miles away </Text>
                    <FlatList
                        horizontal
                        data={item.tags}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                        <View >
                            <Text>{item} </Text>
                        </View>
                        }
                    />
                </View>
                }
            />
        </View>
    );
}

// TODO: stylize static header
// TODO: three tabs of scrolling information
function HouseProfileScreen({navigation}) {
    var key = ID;

    return(

        <View>
            <SafeAreaView>
                <Pressable onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>

            <Text>profile for</Text>
            <Text>{houseData[key].houseName}</Text>
            <Text>{houseData[key].milesAway} miles away</Text>
            <FlatList
                horizontal
                data={houseData[key].tags}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View >
                    <Text>{item} </Text>
                </View>
                }
            />
        </View>
    );
}
// setSelected={(title) => houseHandler(title)}
const styles = StyleSheet.create({
    button: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 24,
        padding: 10,
    },
});

export { HousesScreen, HouseProfileScreen};