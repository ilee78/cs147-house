import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SelectList } from "react-native-dropdown-select-list";
import Slider from "@react-native-community/slider";
import { SvgUri } from "react-native-svg";
import Logo from "../../assets/logo.png";
import BackIcon from "../../assets/back.js";
import BuildingGraphic from './../../assets/buildingGraphic.png';
import Store from './../../Store';
import './Global.js';
import { Button } from "react-native-paper";

// TODO: navigate to landing page for new house once done creating
// changes for owned house vs. joined house landing page - joined -> owner on button label, report house -> delete house, you are moderator

function CreateHouseLandingScreen({ navigation }) {
    const [user, ,updateUser] = Store.useState("user");
    const [house, ,updateHouse] = Store.useState("created-house");
    const addOwnedHouse = () => {
        updateHouse(house => {house.houseName = ''});
        updateHouse(house => {house.location = ''});
        updateHouse(house => {house.about = ''});
        updateHouse(house => {house.tags = []});
        //updateUser(user => { user.num_owned_houses += 1 });
        //updateUser(user => { user.owned_houses.push({houseName: '', location: '', about: '', tags: []}) }); // blank form for new house
    }

    // called when user navigates back and goes to previous screen
    const deleteOwnedHouse = () => {
        // reset to values
        updateHouse(house => {house.houseName = ''});
        updateHouse(house => {house.location = ''});
        updateHouse(house => {house.about = ''});
        updateHouse(house => {house.tags = []});

        // global.HOUSENAME = '';
        // global.HOUSELOCATION = '';
        // global.HOUSEABOUT = '';
        // global.HOUSETAGS = [];
        //updateUser(user => { user.num_owned_houses -= 1 });
        //updateUser(user => { user.owned_houses.pop() });
    }

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => {deleteOwnedHouse(); navigation.goBack();}}>
                {/* <Pressable style={styles.backIcon} onPress={() => {navigation.goBack();}}> */}
                    <BackIcon color='black'/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.headerText}>
                    let's build a
                    <Text style={styles.houseText}> house</Text>!
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() => {navigation.navigate("CreateHouseName");}}>
                    {/* onPress={() => {addOwnedHouse(); navigation.navigate("CreateHouseName");}}> */}
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

function CreateHouseNameScreen({ navigation }) {
    const [user, ,updateUser] = Store.useState("user");
    const [house, ,updateHouse] = Store.useState("created-house");
    const updateHouseName = (name) => {
        updateHouse(house => {house.houseName = name});
        //global.HOUSENAME = name;
        // updateUser(user => {user.owned_houses[user.num_owned_houses - 1].houseName = name});
    }

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon color='black'/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.headerText}>give your house a name:</Text>
                <TextInput
                style={styles.textInput}
                placeholder="enter name..."
                onChangeText={(name) => updateHouseName(name)}          
                />
                <Pressable
                style={styles.button}
                onPress={() => {navigation.navigate("CreateHouseLocation");}}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

function CreateHouseLocationScreen({ navigation }) {
    const [user, ,updateUser] = Store.useState("user");
    const [house, ,updateHouse] = Store.useState("created-house");
    const data = [{ key: "1", value: "San Francisco, CA" }];
    
    const updateHouseLocation = (location) => {
        updateHouse(house => {house.location = location});
        //global.HOUSELOCATION = location;
        // updateUser(user => {user.owned_houses[user.num_owned_houses - 1].location = location});
    }

    return (
      <SafeAreaView style={styles.background}>
        <SafeAreaView style={styles.topPanel}>
            <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                <BackIcon color='black'/>
            </Pressable>
        </SafeAreaView>
        <SafeAreaView style={styles.contentPanel}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.headerText}>where is your house based?</Text>
            <SelectList
            boxStyles={styles.locationInput}
            placeholder="search locations..."
            fontFamily="WorkSans-MediumItalic"
            buttonStyle={styles.textInput}
            setSelected={(val) => updateHouseLocation(val)}
            data={data}
            save="value"/>
            <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("CreateHouseAbout")}>
                <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    );
}

function CreateHouseAboutScreen({ navigation }) {
    const [user, ,updateUser] = Store.useState("user");
    const [house, ,updateHouse] = Store.useState("created-house");
    const updateHouseAbout = (about) => {
        updateHouse(house => {house.about = about});
        //global.HOUSEABOUT = about;
        // updateUser(user => {user.owned_houses[user.num_owned_houses - 1].about = about});
    }

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon color='black'/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.headerText}>tell us about your house!</Text>
                <TextInput
                style={styles.textInput}
                placeholder="enter description..."
                onChangeText={(about) => updateHouseAbout(about)}          
                />
                <Pressable
                style={styles.button}
                onPress={() => {navigation.navigate("CreateHouseTags");}}>
                    <Text style={styles.buttonText}>next</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}

function CreateHouseTagsScreen({ navigation }) {
    var tags = [];
    const [user, ,updateUser] = Store.useState("user");
    const [house, ,updateHouse] = Store.useState("created-house");
  
    function tagsInputHandler() {
        for (let i = 0; i < SECTIONS.length; i++) {
            for (let j = 0; j < SECTIONS[i].data.length; j++) {
                if (SECTIONS[i].data[j].selected) {
                    tags.push(SECTIONS[i].data[j].text);
                }
            }
        }
        updateHouse(house => {house.tags = tags});
        //global.HOUSETAGS = tags;
        //updateUser(user => {user.owned_houses[user.num_owned_houses - 1].tags = tags});
    }
  
    return (
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon color='black'/>
                </Pressable>
            </SafeAreaView>
        <SafeAreaView style={styles.contentPanel}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.headerText}>add some tags to your house</Text>
            <View style={styles.container}>
                <StatusBar style="light" />
                <SafeAreaView style={{ flex: 1 }}>
                <SectionList
                contentContainerStyle={{ paddingHorizontal: 12 }}
                stickySectionHeadersEnabled={false}
                scrollEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({ section }) => (
                    <>
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                    <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                    />
                    </>
                )}
                renderItem={({ item, section }) => {
                  return null;
                  return <ListItem item={item} />;
                }}
                />
                </SafeAreaView>
            </View>
            <Pressable
            style={styles.button}
            onPress={() => {tagsInputHandler(); navigation.navigate("CreateHouseLoading");}}
            >
            <Text style={styles.buttonText}>next</Text>
            </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    );
}

function CreateHouseLoadingScreen({ navigation }) {
    const [user, ,updateUser] = Store.useState("user");
    const [house, ,updateHouse] = Store.useState("created-house");
    //setTimeout(() => {dumpData(); navigation.navigate('Tabs', {screen: 'Neighborhood'});}, 2000);

    function dumpData() {
        updateUser(user => {user.owned_houses.push({
            houseName: house.houseName,
            location: house.location,
            about: house.about,
            tags: house.tags,
        })});
        // const fs = require('fs');
        // var data = fs.readFileSync('./../../house-data.json');
        // var obj = JSON.parse(data);
        let newHouse = {
          "key": global.HOUSEDATA.length,
          "houseName": house.houseName, 
          "color": "yellow",
          "headerColor": "#FDC765",
          "profileImg": "houseProfileImg.jpg",
          "userJoined": true, 
          "userOwner": true,
          "location": house.location, 
          "address": "456 Duck Walk Way, San Francisco, CA 94110",
          "map": "duck-walkway.png",
          "milesAway": 0, 
          "tags": house.tags, 
          "about": house.about,
          "events": [
            {
                "eventIndex": 0,
                "eventName": "meet the house!",
                "userRSVP": false,
                "eventAddress": "388 9th St #125a, Oakland, CA 94607", 
                "eventDate": "12/16/2022",
                "eventStartTime": "5:30 PM PST",
                "eventAbout": "come meet everyone! we will have snacks and drinks"
            }
        ],
          "members": [
              user.username,
          ],
          "moderators": [
              user.username,
          ]
      };
      global.HOUSEDATA = [...global.HOUSEDATA, newHouse];
      global.COUNTCREATE = global.COUNTCREATE + 1;
      updateUser(user => { user.houses.push(newHouse.key)});
    }

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.contentPanel}>
                <Image style={styles.logo} source={Logo} />
                <Text style={styles.headerText}>building <Text style={{color: '#FB749C'}}>{house.houseName}</Text>...</Text>
          <Pressable
            style={styles.button}
            onPress={() => { dumpData(); navigation.navigate("CreateHouseLoading"); }}
          >
            <Text style={styles.buttonText}>create!</Text>
          </Pressable>
            </SafeAreaView>
            <SafeAreaView style={styles.graphicPanel}>
                <Image style={styles.buildingImage} source={BuildingGraphic}/>
            </SafeAreaView>
        </SafeAreaView>
    );
}
// last screen should navigate back to tabs ? or neighborhood screen

const SECTIONS = [
    {
      title: "dance genres",
      data: [
        { key: "1", text: "afrobeats", selected: false },
        { key: "2", text: "ballet", selected: false },
        { key: "3", text: "ballroom", selected: false },
        { key: "4", text: "breaking", selected: false },
        { key: "5", text: "choreography", selected: false },
        { key: "6", text: "contemporary", selected: false },
        { key: "7", text: "cultural", selected: false },
        { key: "8", text: "dancehall", selected: false },
        { key: "9", text: "heels", selected: false },
        { key: "10", text: "hip-hop", selected: false },
        { key: "11", text: "house", selected: false },
        { key: "12", text: "jazz", selected: false },
        { key: "13", text: "jazz funk", selected: false },
        { key: "14", text: "k-pop", selected: false },
        { key: "15", text: "krump", selected: false },
        { key: "16", text: "litefeet", selected: false },
        { key: "17", text: "locking", selected: false },
        { key: "18", text: "modern", selected: false },
        { key: "19", text: "popping", selected: false },
        { key: "20", text: "vogue", selected: false },
      ],
    },
    {
      title: "goals",
      data: [
        { key: "1", text: "confidence", selected: false },
        { key: "2", text: "finding friends", selected: false },
        { key: "3", text: "getting in shape", selected: false },
        { key: "4", text: "just having fun", selected: false },
        { key: "5", text: "training", selected: false },
      ],
    },
    {
      title: "anything else?",
      data: [
        { key: "1", text: "casual learner", selected: false },
        { key: "2", text: "dance battles", selected: false },
        { key: "3", text: "freestyle", selected: false },
        { key: "4", text: "on a team", selected: false },
        { key: "5", text: "professional", selected: false },
        { key: "6", text: "lgbtq+", selected: false },
      ],
    },
  ];
  
  const ListItem = ({ item }) => {
    const [selected, setSelected] = useState(false);
  
    return (
      <View
        style={{
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: selected ? "#FFEBC6" : "#fff",
        borderWidth: 1,
        borderColor: selected ? "#FFEBC6" : "#C6C6C6",
        borderRadius: 24,
        padding: 10,
        }}
      >
        <Pressable
        onPressOut={() => {
            setSelected(!selected);
            item.selected = !item.selected;
        }}>
          <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      </View>
    );
  };

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    topPanel: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      textAlign: "left",
    },
    contentPanel: {
      flex: 15,
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    },
    bottomPanel: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    },
    graphicPanel: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    logo: {
      width: 86,
      height: 96,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      marginBottom: 22,
    },
    headerText: {
      fontSize: 24,
      color: "black",
      marginHorizontal: 46,
      paddingBottom: 18,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "WorkSans-Regular",
    },
    houseText: {
      fontSize: 24,
      color: "#FB749B",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "WorkSans-Regular",
    },
    bodyText: {
      fontSize: 16,
      color: "#61646B",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "WorkSans-Regular",
      marginLeft: 46,
      marginRight: 46,
    },
    button: {
      backgroundColor: "#FDC765",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 50,
      width: 128,
      height: 45,
      borderRadius: 24,
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#AFB1B6",
      width: "80%",
      padding: 12,
      borderRadius: 8,
      fontFamily: "WorkSans-MediumItalic",
    },
    locationInput: {
      borderWidth: 1,
      borderColor: "#AFB1B6",
      padding: 12,
      borderRadius: 8,
      fontFamily: "WorkSans-MediumItalic",
    },
    buttonText: {
      fontSize: 24,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "WorkSans-Medium",
      color: "white",
    },
    backIcon: {
      margin: 20,
    },
    slider: {
      width: 300,
    },
    sliderText: {
      fontSize: 16,
      fontFamily: "WorkSans-Medium",
      color: "black",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    sectionHeader: {
      paddingTop: 12,
      fontSize: 18,
      color: "#000",
      marginTop: 20,
      paddingHorizontal: 10,
      textAlign: "left",
      fontFamily: "WorkSans-Medium",
    },
    item: {
      marginHorizontal: 6,
      marginVertical: 10,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#C6C6C6",
      borderRadius: 24,
      padding: 10,
    },
    pressedItem: {
      marginHorizontal: 6,
      marginVertical: 10,
      backgroundColor: "#FFEBC6",
      borderWidth: 1,
      borderColor: "#FFEBC6",
      borderRadius: 24,
      padding: 10,
    },
    itemText: {
      color: "rgba(0, 0, 0, 0.5)",
      textAlign: "center",
    },
    buildingImage: {
        flex: 1,
        width: 210,
        height: 263,
        justifyContent: 'flex-end',
        position: 'absolute',
        resizeMode: 'cover',
        bottom: 10,
        right: 10
    },
  });

export { CreateHouseLandingScreen, CreateHouseNameScreen, CreateHouseLocationScreen, CreateHouseAboutScreen, CreateHouseTagsScreen, CreateHouseLoadingScreen };