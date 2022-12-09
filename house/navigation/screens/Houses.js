import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { Animated, View, SafeAreaView, Text, StyleSheet, Pressable, ScrollView, FlatList, Image, useWindowDimensions, TextInput, ActionSheetIOS, Modal, YellowBox } from 'react-native';
import CheckBox from 'expo-checkbox';

//import { Searchbar } from 'react-native-paper';

import BackIcon from "../../assets/back.js";
import HouseIcon from './../../assets/house.js';
import ProfileIcon from './../../assets/profile-icon.js';
import PinIcon from '../../assets/pin.js';
import BellIcon from '../../assets/bell.js'
import DotsIcon from '../../assets/dots.js';
import CalendarIcon from '../../assets/calendar.js';
import XIcon from '../../assets/x.js';
import Store from './../../Store';

import HouseGraphicBorder from '../../assets/browseHouse-Border.png';
import './Global.js';
//import houseData from '../../house-data.json';
import profileData from '../../profile-data.json';

import SfVoguersMap from '../../assets/duckwalkway.png';
import annabelleProfilePic from '../../assets/annabelleProfilePic.png';
import naliProfilePic from '../../assets/naliProfilePic.png';
import carolineProfilePic from '../../assets/carolineProfilePic.png';
import jeffProfilePic from '../../assets/jeffProfilePic.jpg';
import izzyProfilePic from '../../assets/izzyProfilePic.png';
import michaelProfilePic from '../../assets/michaelProfilePic.jpg';
import hammyProfilePic from '../../assets/hammyProfilePic.jpg';
import defaultProfilePic from '../../assets/defaultProfilePic.jpg'

import HouseProfileImg from '../../assets/houseProfileImg.jpg';
import sfVoguersPic from '../../assets/sfVoguersPic.png';
import oaklandBobaBashPic from '../../assets/oaklandBobaBashPic.png';
import raeClassCommunityPic from '../../assets/raeClassCommunityPic.png';
import poppersPic from '../../assets/houseProfileImg.jpg';
import createdHousePic from '../../assets/createdHousePic.png';

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


function BrowsingScreen({ navigation }) {
    const [selected, setSelected] = useState('');
    const [user, , updateUser] = Store.useState("user");
    const [search, setSearch] = useState('');
    function updateSearch(search) {
        setSearch(search);
    }

    function houseHandler(house) {
        setSelected(house);
        ID = num;
    }


    const HouseProfilePic = ({ houseNumber }) => {
        switch (houseNumber) {
            case 0:
                return <Image style={browseStyles.houseProfilePicture} source={sfVoguersPic}></Image>;
                break;
            case 1:
                return <Image style={browseStyles.houseProfilePicture} source={oaklandBobaBashPic}></Image>;
                break;
            case 2:
                return <Image style={browseStyles.houseProfilePicture} source={raeClassCommunityPic}></Image>;
                break;
            case 3:
                return <Image style={browseStyles.houseProfilePicture} source={poppersPic}></Image>;
                break;
            default:
                return <Image style={browseStyles.houseProfilePicture} source={createdHousePic}></Image>;
        }
    }

    function joinedLabel(house) {
        if (user.houses.includes(house)) {
            return(
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    paddingHorizontal: 12,
                    paddingVertical: 3,
                    borderRadius: 24,
                    maxHeight: 22,
                    marginLeft: 5,
                }}>
                    {user.owned_houses.includes(house) ? 
                    <Text style={{        
                        fontSize: 12,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FB749C',
                        fontFamily: 'WorkSans-Medium'}}>
                    owner</Text>
                    :                
                    <Text style={{        
                        fontSize: 12,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FB749C',
                        fontFamily: 'WorkSans-Medium'}}>
                    joined</Text>}
                </SafeAreaView>
            );
        }
    }

    return (
        <SafeAreaView style={browseStyles.housesPanel}>
            <TextInput
                style={browseStyles.searchBar}
                placeholder="search houses or tags..."
                onChangeText={(search) => updateSearch(search)}
                value={search}
            />
            <SafeAreaView style={browseStyles.location}>
                <SafeAreaView style={{ marginRight: 10 }}>
                    <PinIcon color='white' width='12' height='14' />
                </SafeAreaView>
                <Text style={browseStyles.locationText}>{user.location}</Text>
            </SafeAreaView>
            <FlatList
                style={browseStyles.housesFlatList}
                data={global.HOUSEDATA}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <SafeAreaView>
                        <Pressable style={browseStyles.houseListing} onPress={() => navigation.navigate("BrowseHouseLanding", { key: item.key })}>
                            <Pressable style={browseStyles.tempIconBackground}>
                            </Pressable>
                            <SafeAreaView style={browseStyles.houseInfo}>
                                <SafeAreaView style={{flexDirection: 'row'}}>
                                    <Text style={{
                                        flex: 1,
                                        fontFamily: "WorkSans-Regular",
                                        fontSize: 20
                                    }}>{item.houseName}</Text>
                                    <View>
                                        {joinedLabel(item.key)}
                                    </View>
                                </SafeAreaView>
                                <SafeAreaView style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <SafeAreaView style={styles.pinIcon}>
                                        <PinIcon color='black' width='12' height='14' />
                                    </SafeAreaView>
                                    <Text style={browseStyles.milesAway}>{item.milesAway} miles away</Text>
                                </SafeAreaView>
                                <FlatList
                                    style={{ flexDirection: "row", flexWrap: "wrap" }}
                                    data={item.tags}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item }) => <BrowseItem item={item} />}
                                />
                            </SafeAreaView>
                        </Pressable>
                        <Pressable style={{ left: 20, top: 10, position: 'absolute' }} onPress={() => navigation.navigate("BrowseHouseLanding", { key: item.key })}>
                            <Image style={browseStyles.houseGraphic} source={HouseGraphicBorder} />
                            <HouseProfilePic houseNumber={item.key} />
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
                user.houses.filter((_, i) => i !== index);
                user.events[key] = [];
            }
        }
    );
}


function HouseLandingScreen({ route, navigation }) {
    // componentDidMount = () => {
    //     LogBox.ignoreWarnings(['VirtualizedLists should never be nested']);
    // };
    const { key } = route.params;
    const [user, , updateUser] = Store.useState("user");
    const [houseTab, setHouseTab] = useState("about");
    const layout = useWindowDimensions();
    const [eventIndex, updateEventIndex] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const imagePath = "./../../"+global.HOUSEDATA[key].profileImg
    const leaveHouse = (leftHouse) => {
        var leftIndex = user.houses.indexOf(leftHouse);
        updateUser(user => { user.houses.splice(leftIndex, 1) });
    }

    const rsvpEvent = (event) => {
        if (key in user.events) {
            updateUser(user => { user.events[key].push(event) });
        } else {
            updateUser(user => { user.events[key] = [event] });
        }
    }

    const cancelEvent = (event) => {
        var indexOfEvent = user.events[key].indexOf(event);
        updateUser(user => { user.events[key].splice(indexOfEvent, 1) });
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
            toValue: -layout.width * 2,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    const ProfilePic = ({ name }) => {
        switch (name) {
            case "Annabelle W.":
                return <Image style={styles.profileImage} source={annabelleProfilePic}></Image>;
            case "Nali W.":
                return <Image style={styles.profileImage} source={naliProfilePic}></Image>;
            case "Caroline Z.":
                return <Image style={styles.profileImage} source={carolineProfilePic}></Image>;
            case "Jeff W.":
                return <Image style={styles.profileImage} source={jeffProfilePic}></Image>;
            case "Izzy L.":
                return <Image style={styles.profileImage} source={izzyProfilePic}></Image>;
            case "Michael W.":
                return <Image style={styles.profileImage} source={michaelProfilePic}></Image>;
            case "Hammy O.":
                return <Image style={styles.profileImage} source={hammyProfilePic}></Image>;
            case "user": 
                return <Image style={styles.profileImage} source={defaultProfilePic}></Image>;
        }
    }

    const HouseProfilePic = ({ houseNumber }) => {
        switch (houseNumber) {
            case 0:
                return <Image style={styles.houseIconBackground} source={sfVoguersPic}></Image>;
                break;
            case 1:
                return <Image style={styles.houseIconBackground} source={oaklandBobaBashPic}></Image>;
                break;
            case 2:
                return <Image style={styles.houseIconBackground} source={raeClassCommunityPic}></Image>;
                break;
            case 3:
                return <Image style={styles.houseIconBackground} source={poppersPic}></Image>;
                break;
            default:
                return <Image style={styles.houseIconBackground} source={createdHousePic}></Image>;
        }
    }

    const Member = ({ name }) => {
        return (
            <SafeAreaView style={{ borderWidth: 1, borderColor: '#AFB1B6', height: 60, backgroundColor: 'white', borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate("ViewOnlyProfile", { name })}>
                    <SafeAreaView style={{ marginLeft: 4, paddingHorizontal: 16 }}>
                        <ProfilePic name={name} />
                    </SafeAreaView>
                    <Text style={{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: 24}}>{name.toLowerCase()}</Text>
                </Pressable>
            </SafeAreaView>
        );
    };

    const Event = ({ event }) => {
        return (
            <SafeAreaView style={{ borderWidth: 1, borderColor: '#AFB1B6', backgroundColor: 'white', borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                <Pressable style={{ flexDirection: 'row', paddingVertical: 20 }} onPress={() => {updateEventIndex(event.eventIndex), setModalVisible(true)}}>
                    <SafeAreaView style={{ marginLeft: 4, paddingHorizontal: 16, top: 2 }}>
                        <BellIcon width={40} height={40} color='#FDC765' />
                    </SafeAreaView>
                    <SafeAreaView style={{ width: 240 }}>
                        <Text style={{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: 24, marginBottom: 5 }}>{event.eventName}</Text>
                        <SafeAreaView style={styles.eventLocation}>
                            <SafeAreaView style={styles.pinIcon}>
                                <PinIcon color='#61646B' width='12' height='14' />
                            </SafeAreaView>
                            <Text id='milesAway' style={styles.smallDarkText}>{event.eventAddress}</Text>
                        </SafeAreaView>
                        <Text style={styles.eventDescription}>{event.eventAbout.length > 80 ? event.eventAbout.substr(0, 100) + '...' : event.eventAbout}</Text>
                    </SafeAreaView>
                </Pressable>
            </SafeAreaView>
        );
    };

    return (
        <ScrollView style={styles.background}>
            <SafeAreaView>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%'}}>
                        <SafeAreaView style={modalStyles.modalView}>
                            <SafeAreaView style={modalStyles.topPanel}>
                                <Pressable
                                    style={modalStyles.XIcon}
                                    hitSlop={50}
                                    onPress={() => { setModalVisible(!modalVisible); }}>
                                    <XIcon size={20} />
                                </Pressable>
                                {user.houses.includes(key) ?
                                    ((key in user.events && user.events[key].includes(eventIndex)) ?
                                        <Pressable style={modalStyles.cancelButton} onPress={() => {global.NOTIFCOUNT=global.NOTIFCOUNT - 1; cancelEvent(eventIndex)}}>
                                            <Text style={styles.buttonText}>cancel</Text>
                                        </Pressable>
                                        : <Pressable style={modalStyles.rsvpButton} onPress={() => {global.NOTIFCOUNT=global.NOTIFCOUNT + 1; rsvpEvent(eventIndex)}}>
                                            <Text style={styles.buttonText}>rsvp</Text>
                                        </Pressable>)
                                    : <SafeAreaView></SafeAreaView>}
                            </SafeAreaView>
                            <ScrollView style={modalStyles.infoScroll} contentContainerStyle={modalStyles.bottomPanel}>
                                <Text style={modalStyles.eventTitle}>{global.HOUSEDATA[key].events[eventIndex].eventName}</Text>
                                <SafeAreaView style={modalStyles.infoFlex}>
                                    <SafeAreaView style={modalStyles.infoIcon}>
                                        <PinIcon width={24} height={24} color={'#40187B'} />
                                    </SafeAreaView>
                                    <Text style={modalStyles.eventInfo}>{global.HOUSEDATA[key].events[eventIndex].eventAddress}</Text>
                                </SafeAreaView>
                                <SafeAreaView style={modalStyles.infoFlex}>
                                    <SafeAreaView style={modalStyles.infoIcon}>
                                        <CalendarIcon size={24} color={'#40187B'} />
                                    </SafeAreaView>
                                    <Text style={modalStyles.eventInfo}>{global.HOUSEDATA[key].events[eventIndex].eventDate} @ {global.HOUSEDATA[key].events[0].eventStartTime}</Text>
                                </SafeAreaView>
                                <Text style={modalStyles.eventInfo}>{'\n'}about:</Text>
                                <Text style={modalStyles.eventAbout}>{global.HOUSEDATA[key].events[eventIndex].eventAbout}</Text>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </Modal>
            </SafeAreaView>
            <Image source={imagePath}></Image>
            <SafeAreaView style={styles.topPanel}>
                <SafeAreaView style={{ height: 150, width: '100%', backgroundColor: global.HOUSEDATA[key].headerColor, position: 'absolute', top: 0 }}></SafeAreaView>
                <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'center', width: '100%', flex: 1 }}>
                    <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                        <BackIcon color='white' />
                    </Pressable>
                    <SafeAreaView style={{ flex: 8 }}></SafeAreaView>
                    <Pressable style={styles.menuIcon} onPress={user.houses.includes(key) ? openJoinedMenu : openUnjoinedMenu}>
                        <DotsIcon color='white' width='30' height='9' />
                    </Pressable>
                </SafeAreaView>
                <SafeAreaView style={styles.infoPanel}>
                    <HouseProfilePic houseNumber={key}/>
                    <SafeAreaView>
                        <SafeAreaView style={styles.nameAndJoin}>
                            <Text id='houseName' style={styles.houseName}>{global.HOUSEDATA[key].houseName}</Text>
                            {user.houses.includes(key) ? 
                                (user.owned_houses.includes(key) ? 
                                <SafeAreaView style={styles.joinedLabel}>
                                    <Text style={styles.joinedLabelText}>owner</Text>
                                </SafeAreaView>
                                : 
                                <SafeAreaView style={styles.joinedLabel}>
                                    <Text style={styles.joinedLabelText}>joined</Text>
                                </SafeAreaView>)
                                : <Pressable style={styles.joinButton} onPress={() => navigation.navigate("NormsAndRules", { key: key })}>
                                    <Text style={styles.buttonText}>join</Text>
                                </Pressable>}
                        </SafeAreaView>
                        <SafeAreaView style={styles.distance}>
                            <SafeAreaView style={styles.pinIcon}>
                                <PinIcon color='white' width='12' height='14' />
                            </SafeAreaView>
                            <Text id='milesAway' style={styles.smallText}>{global.HOUSEDATA[key].milesAway} miles away</Text>
                        </SafeAreaView>
                        <SafeAreaView style={styles.tagPanel}>
                            <FlatList
                                id='tags'
                                horizontal
                                data={global.HOUSEDATA[key].tags}
                                renderItem={({item}) => <Tags item={item}/> }
                                showsHorizontalScrollIndicator={false}
                            />
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={styles.tabsPanel}>
                    <Pressable onPress={() => { setHouseTab("about"); ToAbout(); }}>
                        <Text style={houseTab == "about" ? styles.selected : styles.unselected}>
                            about
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => { setHouseTab("events"); ToEvents(); }}>
                        <Text style={houseTab == "events" ? styles.selected : styles.unselected}>
                            events
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => { setHouseTab("roommates"); ToRoommates(); }}>
                        <Text style={houseTab == "roommates" ? styles.selected : styles.unselected}>
                            roommates
                        </Text>
                    </Pressable>
                </SafeAreaView>
            </SafeAreaView>

            <Animated.View
                style={[{ transform: [{ translateX: moveAnim }] }]}>
                <SafeAreaView style={styles.houseInfoPanels}>
                    <SafeAreaView>
                    <SafeAreaView style={{padding: 20, width: layout.width-60, marginHorizontal: 30}}>
                        <Text style={styles.where}>where we are</Text>
                        <Text style={styles.smallText}>{global.HOUSEDATA[key].address}</Text>
                        <Image style={{width: layout.width-60, height: 16*(layout.width-60)/35, marginTop: 10, borderRadius: 10}} source={SfVoguersMap} />
                        <Text style={styles.aboutUs}>about us</Text>
                        <Text style={styles.smallText}>{global.HOUSEDATA[key].about}</Text>
                        <SafeAreaView style={styles.moderatorsPanel}>
                            <Pressable style={styles.profileIconBackground}>
                                <ProfileIcon style={styles.profileIcon} color='white' size='24' />
                            </Pressable>
                            <Text style={styles.moderatorText}>{global.HOUSEDATA[key].moderators} is a moderator.</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                    </SafeAreaView>
                    
                    <SafeAreaView>
                    <SafeAreaView style={{padding: 20, width: layout.width-60, marginHorizontal: 30}}>
                        {global.HOUSEDATA[key].events.map(function (event) { return <Event key={event.eventName} event={event} /> })}
                    </SafeAreaView>
                    </SafeAreaView>
                    
                    <SafeAreaView style={{padding: 20, width: layout.width-60, marginHorizontal: 30}}>
                        <Text style={styles.memberText}>members: {user.houses.includes(key) ? global.HOUSEDATA[key].members.length + 1 : global.HOUSEDATA[key].members.length}</Text>
                        {user.houses.includes(key)
                            ? <SafeAreaView style={{ borderWidth: 1, borderColor: '#AFB1B6', height: 60, backgroundColor: 'white', borderRadius: 5, marginVertical: 5, justifyContent: 'center' }}>
                                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate("Profile")}>
                                    <SafeAreaView style={{ marginLeft: 4, paddingHorizontal: 16 }}>
                                        <ProfilePic name={"user"} />
                                    </SafeAreaView>
                                    <Text style={{ color: 'black', fontFamily: 'WorkSans-Regular', fontSize: 24}}>{user.username.toLowerCase()} (me)</Text>
                                </Pressable>
                            </SafeAreaView>
                            : <SafeAreaView></SafeAreaView>}
                        {global.HOUSEDATA[key].members.map(function (name) { return (<Member key={name} name={name} />); })}
                    </SafeAreaView>
                </SafeAreaView>
            </Animated.View>
        </ScrollView>
    );
}

function NormsAndRulesScreen({ route, navigation }) {
    const { key } = route.params;
    const [isSelected, setSelection] = useState(false);
    const [user, , updateUser] = Store.useState("user");
    const [modalVisible, setModalVisible] = useState(false);

    const addHouse = (joinedHouse) => {
        updateUser(user => { user.houses.push(joinedHouse) });
    }

    const HouseProfilePic = ({ houseNumber }) => {
        switch (houseNumber) {
            case 0:
                return <Image style={styles.houseIconBackground} source={sfVoguersPic}></Image>;
                break;
            case 1:
                return <Image style={styles.houseIconBackground} source={oaklandBobaBashPic}></Image>;
                break;
            case 2:
                return <Image style={styles.houseIconBackground} source={raeClassCommunityPic}></Image>;
                break;
            case 3:
                return <Image style={styles.houseIconBackground} source={poppersPic}></Image>;
                break;
            default:
                return <Image style={styles.houseIconBackground} source={createdHousePic}></Image>;
        }
    }


    return (
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={normsStyles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.navigate("BrowseHouseLanding", { key: key })}>
                    <BackIcon color='white' />
                </Pressable>
                <SafeAreaView style={normsStyles.normsHeader}>
                    <HouseProfilePic houseNumber={key}/>
                    <Text style={normsStyles.houseName}>{global.HOUSEDATA[key].houseName}</Text>
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
                    onPress={() => { global.JUSTJOINEDHOUSE = global.HOUSEDATA[key].houseName; addHouse(global.HOUSEDATA[key].key); navigation.navigate("BrowseHouseLanding", { key: key }); }}
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
    // eventsPanel: {
    //     padding: 20,
    //     width: 350,
    //     marginHorizontal: 32
    // },
    roommatesPanel: {
        padding: 20,
        width: 350,
        marginHorizontal: 32
    },
    memberText: {
        fontFamily: 'WorkSans-Medium',
        fontSize: 20,
        color: 'white',
        paddingBottom: 10,
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20
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
        marginRight: 7,
        marginVertical: 3,
    },
    distance: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eventLocation: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 240,
    },
    eventDescription: {
        maxWidth: 240,
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'left',
        alignItems: 'left',
        marginVertical: 5,
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
    smallDarkText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        color: '#61646B',
        maxWidth: 230,
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
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        color: 'white',
        height: 20
    },
    locationText: {
        color: 'white'
    },
    housesFlatList: {
    },
    houseListing: {
        marginRight: 20,
        marginLeft: 65,
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
    houseGraphic: {
        width: 100,
        height: 100,
    },
    houseProfilePicture: {
        width: 65,
        height: 65,
        left: 70,
        bottom: 80,
        borderRadius: 33,
        borderWidth: 3,
        borderColor: '#FB749B',
    },
    tempIconBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 60,
        height: 60,
        marginRight: 30
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
    milesAway: {
        marginVertical: 1
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
        paddingHorizontal: 10,
        paddingVertical: 5,
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

const modalStyles = StyleSheet.create({
    modalView: {
      marginTop: 220,
      width: '90%',
      height: '55%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#AFB1B6'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    eventTitle: {
      textAlign: "left",
      fontFamily: "WorkSans-Medium",
      fontSize: 28,
      color: "black",
      marginBottom: 20,
      maxWidth: '90%',
      color: '#40187B'
    },
    eventInfo: {
        textAlign: "left",
        fontFamily: "WorkSans-Regular",
        fontSize: 18,
        color: "black",
        marginBottom: 15,
        maxWidth: '80%'
    },
    eventAbout: {
        textAlign: "left",
        fontFamily: "WorkSans-Regular",
        fontSize: 18,
        color: "black",
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#AFB1B6',
        paddingVertical: 16,
        paddingHorizontal: 10,
        width: '99%'
    },
    topPanel: {
        justifyContent: 'flex-start',
        flex: 0,
        width: 30,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    bottomPanel: {
        alignItems: "left",
        justifyContent: 'top',
    },
    infoFlex: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    infoIcon: {
        marginRight: 10,
    },
    infoScroll: {
        flex: 6,
        width: '80%',
        marginLeft: 30,
        marginVertical: 30,
    },
    XIcon: {
        margin: 20,
    },
    rsvpButton: {
        flex: 0,
        alignItems: 'center',
        width: 72,
        paddingHorizontal: 12,
        paddingVertical: 6,
        height: 32,
        borderRadius: 24,
        backgroundColor: '#FDC765',
        marginLeft: 230
    },
    cancelButton: {
        flex: 0,
        alignItems: 'center',
        width: 90,
        paddingHorizontal: 12,
        paddingVertical: 6,
        height: 32,
        borderRadius: 24,
        backgroundColor: '#FD6565',
        marginLeft: 212
    }
  });

export { BrowsingScreen, HouseLandingScreen, NormsAndRulesScreen };