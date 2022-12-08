import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Animated, PanResponder, SafeAreaView, Text, StyleSheet, Pressable, Image, FlatList, ScrollView, Button, useWindowDimensions, ActionSheetIOS, Modal } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from 'react-native-sidebar';

import houseData from '../../house-data.json';

import EmptyNeighborhoodGraphic from '../../assets/boxesGraphic.png';
import LinesIcon from '../../assets/lines.png';
import XIcon from '../../assets/x.js';
import HouseMint from '../../assets/house-mint.png';
import HousePink from '../../assets/house-pink.png';
import HouseYellow from '../../assets/house-yellow.png';
import OwnedHouseMint from '../../assets/ownedHouse-Mint.png';
import OwnedHousePink from '../../assets/ownedHouse-Pink.png';
import OwnedHouseYellow from '../../assets/ownedHouse-Yellow.png';
import Bulletin from '../../assets/bulletinBoard.png'
import BulletinNotif from '../../assets/bulletinBoard-Notif.png'
import HouseProfileImg from '../../assets/houseProfileImg.jpg'
import Store from './../../Store';

import sfVoguersPic from '../../assets/sfVoguersPic.png';
import oaklandBobaBashPic from '../../assets/oaklandBobaBashPic.png';
import raeClassCommunityPic from '../../assets/raeClassCommunityPic.png';
import poppersPic from '../../assets/houseProfileImg.jpg';

//var justJoined = false;

function NeighborhoodScreen({ navigation }) {
    const [user, , updateUser] = Store.useState("user");
    const [modalVisible, setModalVisible] = useState(false);
    const layout = useWindowDimensions();

    // const flipJustJoined = () => {
    //     justJoined = !justJoined;
    // }
    //houseData[user.houses[user.houses.length-1]].houseName
    const openAnim = useRef(new Animated.Value(-250)).current;
    const openAnim2 = useRef(new Animated.Value(-150)).current;
    const OpenMenu = () => {
        Animated.timing(openAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
        Animated.timing(openAnim2, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    const CloseMenu = () => {
        Animated.timing(openAnim, {
            toValue: -250,
            duration: 500,
            useNativeDriver: true
        }).start();
        Animated.timing(openAnim2, {
            toValue: -175,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    if (global.JUSTJOINEDHOUSE !== '') {
        console.log("joined house :");
        console.log(global.JUSTJOINEDHOUSE);
        setModalVisible(true);
        global.JUSTJOINEDHOUSE = '';
    }
    if (user.houses.length > 0) {
        // Neighborhood
        return (
            <SafeAreaView style={styles.background}>
                <SafeAreaView>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <SafeAreaView style={modalStyles.modalView}>
                            <SafeAreaView style={modalStyles.topPanel}>
                                <Pressable
                                    style={modalStyles.XIcon}
                                    hitSlop={50}
                                    onPress={() => { setModalVisible(!modalVisible); }}>
                                    <XIcon size={20} />
                                </Pressable>
                            </SafeAreaView>
                            <SafeAreaView style={modalStyles.bottomPanel}>
                                <Text>🎉</Text>
                                <Text style={modalStyles.welcomeHome}>welcome home!</Text>
                                <Text style={modalStyles.joinedHouseText}>you've joined the house</Text>
                                <Text style={modalStyles.joinedHouseName}>{houseData[user.houses[user.houses.length - 1]].houseName}</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                    </Modal>
                </SafeAreaView>
                <SafeAreaView style={styles.neighborhoodHeading}>
                    <Pressable onPress={OpenMenu}>
                        <Image style={styles.menuIcon} source={LinesIcon} />
                    </Pressable>
                    <Text style={styles.headingText}>neighborhood</Text>
                </SafeAreaView>
                <SafeAreaView style={{ flex: 8 }}>
                    <FlatList
                        ListHeaderComponent={
                            <Pressable onPress={() => navigation.navigate("Bulletin")} style={styles.bulletinPanel}>
                                <Image style={styles.bulletinImage} source={global.NOTIFCOUNT > 0 ? BulletinNotif : Bulletin} />
                                {global.NOTIFCOUNT > 0 ? <Text style={styles.notifCount}>{global.NOTIFCOUNT > 98 ? 99 : global.NOTIFCOUNT}</Text> : <Text></Text>}
                            </Pressable>
                        }
                        vertical
                        numColumns={2}
                        data={user.houses}
                        renderItem={({ item }) => <Pressable onPress={() => navigation.navigate("NeighborhoodHouseLanding", { key: item })} style={styles.houseDisplay}>
                            <UserHouses item={item} /></Pressable>}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        style={styles.neighborhoodList}
                    />
                </SafeAreaView>
                <Animated.View
                    style={[{ transform: [{ translateX: openAnim }] }]}>
                    <SafeAreaView style={styles.menuPanel}>
                        <SafeAreaView style={styles.neighborhoodMenu}>
                            <SafeAreaView style={styles.neighborhoodMenuContent}>

                                <FlatList
                                    ListHeaderComponent={
                                        <SafeAreaView style={{ justifyContent: 'flex-start' }}>
                                            <Text style={styles.menuHeader}>my houses</Text>
                                            <Pressable style={styles.createHouseButton}>
                                                <Text style={styles.menuText}>+ create a house</Text>
                                            </Pressable>

                                        </SafeAreaView>
                                    }
                                    vertical
                                    data={user.houses}
                                    renderItem={({ item }) => <Pressable onPress={() => navigation.navigate("NeighborhoodHouseLanding", { key: item })} style={styles.menuHouseContainer}>
                                        <MenuHouse item={item}></MenuHouse>
                                    </Pressable>}
                                    scrollEnabled={true}
                                    showsVerticalScrollIndicator={false}
                                    style={styles.menuNeighborhoodList}
                                />
                            </SafeAreaView>
                        </SafeAreaView>
                        <Animated.View style={[{ transform: [{ translateX: openAnim2 }] }]}>
                            <Pressable style={styles.nonMenuSpace} onPress={CloseMenu}></Pressable>
                        </Animated.View>
                    </SafeAreaView>
                </Animated.View>
            </SafeAreaView>

        );
    }
    else {
        // Empty Neighborhood
        return (
            <SafeAreaView style={styles.background}>
                <SafeAreaView style={styles.neighborhoodHeading}>
                    <Pressable onPress={OpenMenu}>
                        <Image style={styles.menuIcon} source={LinesIcon} />
                    </Pressable>
                    <Text style={styles.headingText}>neighborhood</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.centerContentPanel}>
                    <Text style={styles.whiteText}>it's empty in here.</Text>
                    <Pressable style={styles.browseHousesButton} onPress={() => navigation.navigate("Houses")}>
                        <Text style={styles.buttonText}>browse houses</Text>
                    </Pressable>
                </SafeAreaView>
                <Image style={styles.boxesImage} source={EmptyNeighborhoodGraphic} />
                <Animated.View
                    style={[{ transform: [{ translateX: openAnim }] }]}>
                    <SafeAreaView style={styles.menuPanel}>
                        <SafeAreaView style={styles.neighborhoodMenu}>
                            <SafeAreaView style={styles.neighborhoodMenuContent}>

                                <FlatList
                                    ListHeaderComponent={
                                        <SafeAreaView style={{ justifyContent: 'flex-start' }}>
                                            <Text style={styles.menuHeader}>my houses</Text>
                                            <Pressable style={styles.createHouseButton}>
                                                <Text style={styles.menuText}>+ create a house</Text>
                                            </Pressable>

                                        </SafeAreaView>
                                    }
                                    vertical
                                    data={user.houses}
                                    renderItem={({ item }) => <Pressable onPress={() => navigation.navigate("NeighborhoodHouseLanding", { key: item })} style={styles.menuHouseContainer}>
                                        <MenuHouse item={item}></MenuHouse>
                                    </Pressable>}
                                    scrollEnabled={true}
                                    showsVerticalScrollIndicator={false}
                                    style={styles.menuNeighborhoodList}
                                />
                            </SafeAreaView>
                        </SafeAreaView>
                        <Animated.View style={[{ transform: [{ translateX: openAnim2 }] }]}>
                            <Pressable style={styles.nonMenuSpace} onPress={CloseMenu}></Pressable>
                        </Animated.View>
                    </SafeAreaView>
                </Animated.View>
            </SafeAreaView>
        );
    }

}

const HouseProfilePic = ({ houseNumber }) => {
    switch (houseNumber) {
        case 0:
            return <Image style={styles.houseProfileImage} source={sfVoguersPic}></Image>;
        case 1:
            return <Image style={styles.houseProfileImage} source={oaklandBobaBashPic}></Image>;
        case 2:
            return <Image style={styles.houseProfileImage} source={raeClassCommunityPic}></Image>;
        case 3:
            return <Image style={styles.houseProfileImage} source={poppersPic}></Image>;

    }
}

const MenuHouseProfilePicture = ({ houseNumber }) => {
    switch (houseNumber) {
        case 0:
            return <Image style={styles.menuHouseProfileImage} source={sfVoguersPic}></Image>;
        case 1:
            return <Image style={styles.menuHouseProfileImage} source={oaklandBobaBashPic}></Image>;
        case 2:
            return <Image style={styles.menuHouseProfileImage} source={raeClassCommunityPic}></Image>;
        case 3:
            return <Image style={styles.menuHouseProfileImage} source={poppersPic}></Image>;

    }
};

const MenuHouse = ({ item }) => {
    console.log(houseData[item].houseName);
    return (
        <SafeAreaView style={styles.horizontalMenuHouseContainer}>
            <MenuHouseProfilePicture houseNumber={houseData[item].key}></MenuHouseProfilePicture>
            <Text style={styles.menuHouseNameText}>{houseData[item].houseName}</Text>
        </SafeAreaView>
    );
};

const UserHouses = ({ item }) => {
    return (
        <SafeAreaView>
            <SafeAreaView style={styles.houseNameContainer}>
                <Text style={styles.houseNameText}>{houseData[item].houseName}</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.horizontalGraphicsContainer}>
                <HouseIllustration item={item}></HouseIllustration>
                <HouseProfilePic houseNumber={houseData[item].key} />
            </SafeAreaView>
        </SafeAreaView>
    );
};

const HouseIllustration = ({ item }) => {
    //if (global.OWNEDHOUSES.includes(item)) {
    //     switch (HouseData[item].color) {
    //         case 'yellow':
    //             return (<Image style={styles.houseIllustration} source={OwnedHouseYellow}></Image>);
    //         case 'pink':
    //             return (<Image style={styles.houseIllustration} source={OwnedHousePink}></Image>);
    //         case 'mint':
    //             return (<Image style={styles.houseIllustration} source={OwnedHouseMint}></Image>);
    //     }
    // }
    switch (houseData[item].color) {
        case 'yellow':
            return (<Image style={styles.houseIllustration} source={HouseYellow}></Image>);
        case 'pink':
            return (<Image style={styles.houseIllustration} source={HousePink}></Image>);
        case 'mint':
            return (<Image style={styles.houseIllustration} source={HouseMint}></Image>);
    }
};

const HouseProfilePicture = ({ item }) => {
    switch (houseData[item].profileImg) {
        case 'houseProfileImg.jpg':
            return (<Image style={styles.houseProfileImage} source={HouseProfileImg}></Image>);
    }
};

function BulletinScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>bulletin screen</Text>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>go back</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fadingContainer: {
        height: 30,
        width: 30,
        backgroundColor: 'red'
    },
    background: {
        flex: 1,
        backgroundColor: '#40187B',
    },
    boxesImage: {
        width: 213,
        height: 132,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 40,
        right: 40
    },
    browseHousesButton: {
        backgroundColor: '#FDC765',
        fontFamily: 'WorkSans-Medium',
        alignItems: 'center',
        justifyContent: 'center',
        width: 274,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 10,
        height: 58,
        borderRadius: 29,
    },
    bulletinImage: {
        width: 218,
        height: 135,
    },
    bulletinPanel: {
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    centerContentPanel: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'WorkSans-Medium',
    },
    contentPanel: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'WorkSans-Medium',
        scrollY: true,
    },
    createHouseButton: {
        padding: 10,
        paddingTop: 20,
    },
    headingText: {
        fontSize: 36,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'WorkSans-Bold',
    },
    horizontalGraphicsContainer: {
        flexDirection: 'row'
    },
    horizontalMenuHouseContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    houseDisplay: {
        width: '30%',
        marginHorizontal: '10%',
        marginVertical: 8,
        justifyContent: 'flex-end',
        paddingVertical: 5,
    },
    houseIllustration: {
        width: 130,
        height: 167,
        bottom: 10,
    },
    houseNameContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 5
    },
    houseNameText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    houseProfileImage: {
        width: 45,
        height: 45,
        borderRadius: 45,
        borderWidth: 2,
        borderColor: 'white',
        right: 52
    },
    menuHeader: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'WorkSans-Bold',
    },
    menuHouseContainer: {
        flex: 1,
        width: 200,
        marginVertical: 8,
    },
    menuHouseNameText: {
        textAlignVertical: 'center',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 30
    },
    menuHouseProfileImage: {
        width: 45,
        height: 45,
        borderRadius: 45,
    },
    menuIcon: {
        width: 30,
        height: 18,
        padding: 10,
        marginLeft: 35,
        marginRight: 30,
    },
    menuNeighborhoodList: {
        paddingLeft: 20
    },
    menuPanel: {
        flexDirection: 'row',
        position: 'absolute',
    },
    menuText: {
        fontSize: 18,
        marginBottom: 10
    },
    neighborhoodHeading: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    neighborhoodList: {
        alignSelf: 'center',
        width: 390
    },
    neighborhoodMenu: {
        backgroundColor: 'white',
        position: 'relative',
        justifyContent: 'flex-end',
        bottom: 785,
        height: 785,
        width: 250,
    },
    neighborhoodMenuContent: {
        height: 735,
        paddingHorizontal: 10,
    },
    nonMenuSpace: {
        position: 'relative',
        width: 175,
        height: 785,
        bottom: 785,
    },
    notifCount: {
        left: 74,
        bottom: 123,
        fontSize: 24,
        color: 'white',
    },
    whiteText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        marginBottom: 10,
        fontFamily: 'WorkSans-Regular',
    },
    houseProfilePicture: {

    }
});

const modalStyles = StyleSheet.create({
    modalView: {
        marginTop: 300,
        width: '80%',
        aspectRatio: 1.1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignSelf: 'center',
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
    welcomeHome: {
        textAlign: "center",
        fontFamily: "WorkSans-Bold",
        fontSize: 28,
        color: "#40187B",
        marginBottom: 15
    },
    joinedHouseText: {
        textAlign: "center",
        fontFamily: "WorkSans-Regular",
        fontSize: 20,
        color: "black",
        marginBottom: 15
    },
    joinedHouseName: {
        textAlign: "center",
        fontFamily: "WorkSans-Regular",
        fontSize: 20,
        color: "black",
        textDecorationLine: 'underline',
        marginBottom: 15
    },
    topPanel: {
        justifyContent: 'left',
        flex: 1,
        width: 30,
        height: 30
    },
    bottomPanel: {
        flex: 4,
        alignItems: "center",
        justifyContent: 'center',
    },
    XIcon: {
        margin: 16
    }
});

export { NeighborhoodScreen, BulletinScreen };