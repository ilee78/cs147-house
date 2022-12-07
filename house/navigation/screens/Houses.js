import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { Animated, View, SafeAreaView, Text, StyleSheet, Pressable, ScrollView, FlatList, Image, useWindowDimensions, TextInput, ActionSheetIOS, Modal, YellowBox } from 'react-native';
import CheckBox from 'expo-checkbox';

//import { Searchbar } from 'react-native-paper';

import BackIcon from "../../assets/back.js";
import HouseIcon from './../../assets/house.js';
import ProfileIcon from './../../assets/profile-icon.js';
import PinIcon from '../../assets/pin.js';
import DotsIcon from '../../assets/dots.js';
import Store from './../../Store';
//import HouseProfileImg from '../../assets/houseProfileImg.jpg'
//import HouseGraphicBorder from '../../assets/browseHouse-Border.png'

import houseData from '../../house-data.json';

import SfVoguersMap from '../../assets/duckwalkway.png';

// Global variable - bad style lol, change later
var ID = "";



const BrowseItem = ({ item }) => {
    return (
      <View style={browseStyles.browseTag}>
        <Text style={browseStyles.tagText}>{item}</Text>   
      </View>
    );
};

const ProfileItem = ({ item }) => {
    return (
      <View style={browseStyles.profileTag}>
        <Text style={browseStyles.tagText}>{item}</Text>   
      </View>
    );
};


function BrowsingScreen({navigation}) {
    const [selected, setSelected] = useState('');
    
    const [search, setSearch] = useState('');
    function updateSearch (search) {
        setSearch(search);
    }

    function houseHandler(house) {
        setSelected(house);
        ID = num;
    }

    return(
        <SafeAreaView style={browseStyles.housesPanel}>
            <TextInput
                style={browseStyles.searchBar}
                placeholder="search houses or tags..."
                onChangeText={(search) => updateSearch(search)}
                value={search}
            />
            <FlatList 
                style={browseStyles.housesFlatList}
                data={houseData}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                    <SafeAreaView>
                        <Pressable style={browseStyles.houseListing} onPress={() => navigation.navigate("BrowseHouseLanding", {key: item.key})}>
                            <Pressable style={browseStyles.tempIconBackground}>
                                <ProfileIcon style={styles.profileIcon} color='white' size='24'/>
                            </Pressable>
                            <SafeAreaView style={browseStyles.houseInfo}>
                                <Text style={browseStyles.houseName}>{item.houseName}</Text>
                                <Text style={browseStyles.milesAway}>{item.milesAway} miles away</Text>
                                <FlatList
                                    style={{flexDirection : "row", flexWrap : "wrap"}}
                                    data={item.tags}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({item}) => <BrowseItem item={item}/> }
                                />
                            </SafeAreaView> 
                        </Pressable>
                    </SafeAreaView>
                }
            />
        </SafeAreaView>
    );
}

function openUnjoinedMenu(key) {
    ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["cancel", "share this house", "report house"],
          cancelButtonIndex: 0,
          userInterfaceStyle: 'dark'
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            console.log("share this house");
          } else if (buttonIndex === 2) {
            console.log("report house");
          } else if (buttonIndex === 3) {
            console.log("leave house");
            user.houses.filter((_, i) => i !== index)
          }
        }
    );
};

/*function openJoinedMenu(key) {
    //const { key } = route.params;
    const [user, ,updateUser] = Store.useState("user");
    const leaveHouse = (leftHouse) => {
        updateUser(user => { user.houses.splice(leftHouse, 1)});
    }
    
    ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["cancel", "share this house", "report house", "leave house"],
          destructiveButtonIndex: 3,
          cancelButtonIndex: 0,
          userInterfaceStyle: 'dark'
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            console.log("share this house");
          } else if (buttonIndex === 2) {
            console.log("report house");
          } else if (buttonIndex === 3) {
            console.log("leave house");
            leaveHouse(houseData[key].key)
          }
        }
    );
};*/

const Roommate = ({ item }) =>  {
    return (
        <Text style={{backgroundColor: 'red'}}>{item}</Text>
    );
};

function HouseLandingScreen({route, navigation}) {
    // componentDidMount = () => {
    //     LogBox.ignoreWarnings(['VirtualizedLists should never be nested']);
    // };
    const { key } = route.params;
    const [user, ,updateUser] = Store.useState("user");
    const [houseTab, setHouseTab] = useState("about");
    const layout = useWindowDimensions();
    //var houseTab = "about";
    //const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const imagePath = "./../../"+houseData[key].profileImg
    const leaveHouse = (leftHouse) => {
        updateUser(user => { user.houses.splice(leftHouse - 1, 1)});
    }
    const flipJustJoined = () => {
        justJoined = !justJoined;
    }
    const openJoinedMenu = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ["cancel", "share this house", "report house", "leave house"],
              destructiveButtonIndex: 3,
              cancelButtonIndex: 0,
              userInterfaceStyle: 'dark'
            },
            buttonIndex => {
              if (buttonIndex === 0) {
                // cancel action
              } else if (buttonIndex === 1) {
                console.log("share this house");
              } else if (buttonIndex === 2) {
                console.log("report house");
              } else if (buttonIndex === 3) {
                console.log("leave house");
                leaveHouse(key)
              }
            }
        );

    const moveAnim = useRef(new Animated.Value(0)).current;
    const ToAbout = () => {
        Animated.timing(moveAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    };
    const ToEvents = () => {
        Animated.timing(moveAnim, {
            toValue: -layout.width,
            duration: 200,
            useNativeDriver: true
        }).start();
    };
    const ToRoommates = () => {
        Animated.timing(moveAnim, {
            toValue: -layout.width*2,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    const Member = ({ name }) => {
        return (
            <SafeAreaView style={{borderWidth:1, height: 60, backgroundColor: 'white', borderRadius: 5, marginVertical: 5, justifyContent: 'center'}}>
                <Pressable style={{flexDirection: 'row'}} onPress={() => naivgation.navigate("ViewOnlyProfile", {name})}>
                    <SafeAreaView style={{marginLeft: 4, paddingHorizontal: 16, top: 2}}>
                        <ProfileIcon size={24} color='#40187B'/> 
                    </SafeAreaView>
                    <Text style={{color: 'black', fontFamily:'WorkSans-Regular', fontSize: 24}}>{name.toLowerCase()}</Text>   
                </Pressable>
            </SafeAreaView>
        );
    };

    return(
        <ScrollView style={styles.background}>
        <Image source={imagePath}></Image>
        <SafeAreaView style={styles.topPanel}>
            <SafeAreaView style={{height: 150, width: '100%',backgroundColor: houseData[key].headerColor, position:'absolute', top:0}}></SafeAreaView>
                <SafeAreaView style={{flexDirection: 'row', justifyContent:'center', width: '100%', flex: 1}}>
                    <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                        <BackIcon color='white'/>
                    </Pressable>
                    <SafeAreaView style={{flex:8}}></SafeAreaView>
                    <Pressable style={styles.menuIcon} onPress={user.houses.includes(key) ? openJoinedMenu : openUnjoinedMenu}>
                        <DotsIcon color='white' width='30' height='9' />
                    </Pressable>
                </SafeAreaView>
                <SafeAreaView style={styles.infoPanel}>
                    <Pressable style={styles.houseIconBackground}>
                        <HouseIcon style={styles.houseIcon} color='white' size='45'/>
                    </Pressable>
                    <SafeAreaView>
                        <SafeAreaView style={styles.nameAndJoin}>
                            <Text id='houseName' style={styles.houseName}>{houseData[key].houseName}</Text>
                            {user.houses.includes(key) ? 
                                <SafeAreaView style={styles.joinedLabel}>
                                    <Text style={styles.joinedLabelText}>joined</Text>
                                </SafeAreaView>
                            : <Pressable style={styles.joinButton} onPress={() => navigation.navigate("NormsAndRules", {key: key})}>
                                <Text style={styles.buttonText}>join</Text>
                            </Pressable> }
                        </SafeAreaView>   
                        <SafeAreaView style={styles.distance}> 
                            <SafeAreaView style={styles.pinIcon}>
                                <PinIcon color='white' width='12' height='14'/>
                            </SafeAreaView>
                            <Text id='milesAway' style={styles.smallText}>{houseData[key].milesAway} miles away</Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.tagPanel}>
                            <FlatList
                                id = 'tags'
                                horizontal
                                data={houseData[key].tags}
                                renderItem={({item}) => <Tags item={item}/> }
                                showsHorizontalScrollIndicator={false}
                            />
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.tabsPanel}>
                    <Pressable onPress={() => {setHouseTab("about"); ToAbout();}}> 
                        <Text style={houseTab=="about" ? styles.selected : styles.unselected}>
                            about
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {setHouseTab("events"); ToEvents();}}> 
                        <Text style={houseTab=="events" ? styles.selected : styles.unselected}>
                            events
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {setHouseTab("roommates"); console.log(houseData[key].members); ToRoommates();}}> 
                        <Text style={houseTab=="roommates" ? styles.selected : styles.unselected}>
                            roommates
                        </Text>
                    </Pressable>
                </SafeAreaView>
            </SafeAreaView>

            <Animated.View
                style={[{ transform: [{ translateX: moveAnim }] }]}>
                <SafeAreaView style={styles.houseInfoPanels}>
                    <SafeAreaView style={styles.aboutPanel}>
                        <Text style={styles.where}>where we are</Text>
                        <Text style={styles.smallText}>{houseData[key].address}</Text>
                        <Image style={styles.map} source={SfVoguersMap} />
                        <Text style={styles.aboutUs}>about us</Text>
                        <Text style={styles.smallText}>{houseData[key].about}</Text>
                        <SafeAreaView style={styles.moderatorsPanel}>
                            <Pressable style={styles.profileIconBackground}>
                                <ProfileIcon style={styles.profileIcon} color='white' size='24'/>
                            </Pressable>
                            <Text style={styles.moderatorText}>{houseData[key].moderators} is a moderator.</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                    <SafeAreaView style={styles.eventsPanel}>
                        <Text>events</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.roommatesPanel}>
                        <Text style={styles.memberText}>members: {user.houses.includes(key) ? houseData[key].members.length + 1 : houseData[key].members.length}</Text>
                        {user.houses.includes(key)
                        ? [user.username + ' (me)', ...houseData[key].members].map(function(name) {return <Member name={name}/>;})
                        : houseData[key].members.map(function(name) {return (<SafeAreaView style={{borderWidth:1, height: 60, backgroundColor: 'white', borderRadius: 5, marginVertical: 5, justifyContent: 'center'}}>
                        <Pressable style={{flexDirection: 'row'}} onPress={() => navigation.navigate("ViewOnlyProfile", {name: name})}>
                            <SafeAreaView style={{marginLeft: 4, paddingHorizontal: 16, top: 2}}>
                                <ProfileIcon size={24} color='#40187B'/> 
                            </SafeAreaView>
                            <Text style={{color: 'black', fontFamily:'WorkSans-Regular', fontSize: 24}}>{name.toLowerCase()}</Text>   
                        </Pressable>
                    </SafeAreaView>);})}
                    </SafeAreaView>
                </SafeAreaView>
            </Animated.View>
        </ScrollView>
    );
}

function NormsAndRulesScreen({route, navigation}) {
    const { key } = route.params;
    const [isSelected, setSelection] = useState(false);
    const [user, ,updateUser] = Store.useState("user");
    const [modalVisible,setModalVisible] = useState(false);

    const addHouse = (joinedHouse) => {
        updateUser(user => { user.houses.push(joinedHouse)});
    }


    return (
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={normsStyles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.navigate("BrowseHouseLanding", {key: key})}>
                    <BackIcon color='white'/>
                </Pressable>
                <SafeAreaView style={normsStyles.normsHeader}>
                    <Pressable style={normsStyles.houseIconBackground}>
                        <HouseIcon style={styles.houseIcon} color='white' size='58'/>
                    </Pressable>
                    <Text style={normsStyles.houseName}>{houseData[key].houseName}</Text>
                    <Text style={normsStyles.normsTitle}>house rules & norms</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={normsStyles.normsScroll}>
                <ScrollView>
                    <Text style={normsStyles.normsText}>
                        1. respect each other's privacy.{'\n'}
                        2. be kind to each other.{'\n'}
                        3. no NSFW content.{'\n'}
                        4. do not discriminate.{'\n'}
                        5. have fun!
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView style={normsStyles.agreement}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    color={'#AFB1B6'}
                />
                <Text style={normsStyles.iagree}>i agree</Text>
                <Pressable 
                    style={normsStyles.joinButton}
                    disabled={!isSelected}
                    onPress={() => {global.JUSTJOINEDHOUSE = houseData[key].houseName; navigation.navigate("BrowseHouseLanding", {key: key}); addHouse(houseData[key].key);}}
                >
                    <Text style={normsStyles.buttonText}>join house</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}


const Tags = ({ item }) => {
    return (
        <View style={styles.tag}>
            <Pressable>
                <Text style={styles.tagText}>{item}</Text>   
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    houseInfoPanels: {
        flexDirection: 'row',
    },
    aboutPanel: {
        padding: 20,
        marginHorizontal: 32
    },
    eventsPanel: {
        backgroundColor: 'blue',
        padding: 20,
        width: 350,
        marginHorizontal: 32
    },
    roommatesPanel: {
        padding: 20,
        width: 350,
        marginHorizontal: 32
    },
    memberText : {
        fontFamily: 'WorkSans-Regular',
        fontSize: 24,
        color: 'white',
        paddingBottom: 8,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 20,
        fontFamily: 'WorkSans-Regular',
    },
    background: {
        flex: 1,
        backgroundColor: '#40187B'
    },
    topPanel: {
        flex: 1,
        textAlign: "left",
    },
    backIcon: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 40,
    },
    menuIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: 50,
        height: 40,
    },
    infoPanel: {
        flex: 1,
        alignItems: 'left',
        position: 'relative',
        marginLeft: 30,
        marginTop: 20,
    },
    houseIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 94,
        height: 94,
    },
    houseIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameAndJoin: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    houseName: {
        flex: 1,
        fontSize: 30,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 15,
        marginBottom: 5,
        color: 'white'
    },
    joinButton: {
        flex: 0,
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginTop: 10,
        height: 32,
        borderRadius: 24,
    },
    joinedLabel: {
        flex: 0,
        borderColor: '#FDC765',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 10,
        height: 34,
        borderRadius: 24,
    },
    joinedLabelText: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FDC765',
        fontFamily: 'WorkSans-Regular'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#40187B',
        fontFamily: 'WorkSans-Regular'
    },
    pinIcon: {
        marginRight: 7
    },
    distance: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginVertical: 5,
        color: 'white',
        maxWidth: '90%'
    },
    tagPanel: {
        flex: 1,
        marginTop: 5,
        justifyContent: 'left'
    },
    tag: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 30
    },
    tagText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        justifyContent: 'center',
    },
    tabsPanel: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        borderTopColor: 'white',
        borderBottomColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'space-evenly',
        width: '100%'
    },
    unselected: {
        flex: 1,
        color: '#C6C6C6',
        fontFamily: 'WorkSans-Regular',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20
    },
    selected: {
        flex: 1,
        color: '#47C8A7',
        fontFamily: 'WorkSans-Bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    where: {
        color: 'white',
        fontFamily: 'WorkSans-Medium',
        fontSize: 20,
        marginBottom: 10
    },
    map: {
        width: 350,
        height: 160,
        marginTop: 10,
        borderRadius: 10
    },
    aboutUs: {
        color: 'white',
        fontFamily: 'WorkSans-Medium',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 40
    },
    profileIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 41,
        height: 41,
    },
    moderatorsPanel: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    moderatorText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginVertical: 5,
        marginLeft: 10,
        color: 'white',
    }
});

const browseStyles = StyleSheet.create({
    housesPanel: {
        flex: 1,
        backgroundColor: '#40187B'
    },
    housesFlatList: {
        paddingTop: 20,
    },
    houseListing: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'left',
    },
    houseInfo: {
        flex: 1
    },
    tempIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 60,
        height: 60,
        marginRight: 10
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
    tagPanel: {
        flex: 1,
    },
    browseTag: {
        marginRight: 8,
        marginTop: 8,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        padding: 10
    },
    tagText: {
        textAlign: 'center',
        fontSize: 14,
        color: "000",
        fontFamily: "WorkSans-Medium"
    },
    houseName: {
        fontFamily: "WorkSans-Regular",
        fontSize: 20
    },
    distance: {
        fontFamily: "WorkSans-Regular",
        fontSize: 14,
    },
    searchBar: {
        borderWidth: 1,
        borderColor: "#AFB1B6",
        backgroundColor: 'white',
        width: "90%",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 20,
        fontFamily: "WorkSans-MediumItalic",
        fontSize: 14,
        color: 'black',
        marginHorizontal: 20,
        marginTop: 20
    }
});

const normsStyles = StyleSheet.create({
    topPanel: {
        flex: 1,
        textAlign: "left",
    },
    normsHeader: {
        flex: 1,
        alignItems: 'center',
    },
    houseIconBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 120,
        height: 120,
    },
    houseName: {
        fontFamily: "WorkSans-Regular",
        fontSize: 30,
        color: 'white',
        marginVertical: 20
    },
    normsTitle: {
        flex: 1,
        fontFamily: "WorkSans-Medium",
        fontSize: 28,
        color: 'white',
        marginBottom: 20
    },
    normsScroll: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AFB1B6',
        width: '80%',
        maxHeight: '50%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    normsText: {
        fontSize: 16,
        paddingHorizontal: 40,
        paddingVertical: 30,
        color: 'white',
        fontFamily: 'WorkSans-Regular',
        lineHeight: 50
    },
    agreement: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    iagree: {
        fontSize: 16,
        marginRight: 30,
        marginLeft: 10,
        fontFamily: 'WorkSans-Regular',
        color: 'white',
    },
    joinButton: {
        flex: 0,
        alignItems: 'center',
        width: 120,
        paddingHorizontal: 12,
        paddingVertical: 6,
        height: 32,
        borderRadius: 24,
        backgroundColor: '#FDC765'
    },
    buttonText: {
        fontSize: 16,
        color: '#40187B',
        fontFamily: 'WorkSans-Regular'
    }
});

export { BrowsingScreen, HouseLandingScreen, NormsAndRulesScreen };