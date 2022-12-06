import React, { useState, useEffect, useContext } from 'react';
import { View, SafeAreaView, Text, TextInput, StyleSheet, Pressable, ScrollView, FlatList, SectionList } from 'react-native';
import ProfileIcon from './../../assets/profile-icon.js';
import EditIcon from './../../assets/edit.js';
import SettingsIcon from './../../assets/gear.js';
import HouseIcon from './../../assets/house.js';
import MusicIcon from './../../assets/music.js';
import BackIcon from "../../assets/back.js";
import PlusIcon from "../../assets/plus.js"
import Store from './../../Store';

const EMPTY_BIO = '';

// TODO: functionality when 'add a house' is clicked
// TODO: new screen for editing tags

function ProfileScreen({navigation}) {
    const [user, ,updateUser] = Store.useState("user");

    return(
        <ScrollView style={styles.background}>
                <Pressable style={styles.settingsIcon} onPress={() => navigation.navigate("Settings")}>
                    <SettingsIcon color="black" size="24" />
                </Pressable>
                <SafeAreaView style={styles.profilePanel}>
                    <Pressable style={styles.profileBackground}>
                        <ProfileIcon style={styles.profileIcon} color='#FFFFFF' size='58'/>
                    </Pressable>
                    <SafeAreaView style={styles.namePanel}>
                        <Text id='username' style={styles.name}>{user.username}</Text> 
                        <Pressable style={styles.editIcon} onPress={() => navigation.navigate("EditProfile")}>
                            <EditIcon color="black" size="24"/>
                        </Pressable>
                    </SafeAreaView>
                    <Bio />
                </SafeAreaView>
                <SafeAreaView style={styles.tagPanel}>
                    <Text style={styles.sectionHeading}>tags</Text>
                    <FlatList
                        id = 'tags'
                        horizontal
                        data={user.tags}
                        renderItem={({item}) => <Tags item={item} /> }
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
                <SafeAreaView style={styles.housesPanel}>
                    <Text style={styles.sectionHeading}>my houses</Text>
                    <FlatList
                        id = 'houses'
                        horizontal
                        data={user.houses}
                        renderItem={({item}) => <Houses item={item}/> }
                        showsHorizontalScrollIndicator={false}
                    />
                </SafeAreaView>
                <SafeAreaView style={styles.songsPanel}>
                    <Text style={styles.sectionHeading}>songs i'm dancing to</Text>
                    <Songs id='songs'/>
                </SafeAreaView>
        </ScrollView>
    );
}

function EditProfileScreen({navigation}) {
    const [user, ,updateUser] = Store.useState("user");

    // tacking on a "+" button to allow editing of tags on this screen
    const tagsArray = user.tags.concat("+");

    const updateName = (name) => {
      updateUser(user => { user.username = name});
    }

    const updateBio = (bio) => {
        updateUser(user => {user.bio = bio});
    }

    return(
        <SafeAreaView style={editStyles.background}>
            <SafeAreaView style={editStyles.topPanel}>
                <Pressable style={editStyles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon color='red'/>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={editStyles.profilePanel}>
                <Text style={editStyles.sectionHeading}>name</Text>
                <TextInput 
                style={editStyles.editName}
                onChangeText={(name) => updateName(name)}>
                    {user.username}
                </TextInput>
                <Text style={editStyles.sectionHeading}>bio</Text>
                <TextInput 
                style={editStyles.editBio}
                onChangeText={(bio) => updateBio(bio)}>
                    {user.bio}
                </TextInput>
                <Text style={editStyles.sectionHeading}>tags</Text>
                <FlatList
                    style={{marginLeft: 30, marginRight: 30,}}
                    id = 'tags'
                    horizontal
                    data={tagsArray}
                    renderItem={({item}) => <Tags item={item} navigation={navigation}/> }
                    showsHorizontalScrollIndicator={false}
                />
                <Text style={editStyles.sectionHeading}>songs</Text>
                <EditSongs />
            </SafeAreaView>
        </SafeAreaView>
    );
}

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
    const [user, ,updateUser] = Store.useState("user");
    const [selected, setSelected] = useState(user.tags.includes(item.text));
    if (user.tags.includes(item.text)) {
        item.selected = true;
    }
  
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
          }}
        >
          <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      </View>
    );
  };
  


function EditTagsScreen({ navigation }) {
    var tags = [];
    const [user, ,updateUser] = Store.useState("user");
  
    function tagsInputHandler() {
        for (let i = 0; i < SECTIONS.length; i++) {
          for (let j = 0; j < SECTIONS[i].data.length; j++) {
            if (SECTIONS[i].data[j].selected) {
              tags.push(SECTIONS[i].data[j].text);
            }
          }
        }
        updateUser(user => { user.tags = tags });
      }
  
    return (
      <SafeAreaView style={styles.background}>
        <SafeAreaView style={styles.topPanel}>
        <Pressable style={styles.backIcon} onPress={() => {tagsInputHandler(); navigation.goBack();}}>
            <BackIcon color='black'/>
        </Pressable>
        </SafeAreaView>
        <SafeAreaView style={styles.contentPanel}>
          <Text style={styles.headerText}>choose your interests</Text>
          <View style={styles.container}>
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
        </SafeAreaView>
      </SafeAreaView>
    );
  }

function SettingsScreen({navigation}) {
    const [user, ,updateUser] = Store.useState("user");

    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>
    );
}


const Tags = ({ item, navigation }) => {
    return (
        <View style={item == "+" ? styles.addTag : styles.tag}>
            <Pressable onPress={() => {item == "+" ? navigation.navigate("EditTags") : null}}>
                <Text style={styles.tagText}>{item}</Text>   
            </Pressable>
        </View>
    );
};

const Houses = ({ item }) => {
    return (
        <View style={styles.house}>
            <Pressable>
                <Text style={{fontSize:40, color: 'white', textAlign: 'center'}}>+</Text>
                <Text style={styles.houseText}>{item}</Text>
            </Pressable>
        </View>
    );
}

const Bio = () => {
    const [user, ,updateUser] = Store.useState("user");
    return(
        <Text
        style={{
        fontSize: 16,
        fontFamily: user.bio === EMPTY_BIO ? 'WorkSans-Italic' : 'WorkSans-Regular',
        color: user.bio === EMPTY_BIO ? '#61646B' : 'black',
        textAlign: 'center',
        borderColor: '#AFB1B6',
        padding: 21,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        marginLeft: 30,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        minWidth: '80%' // TODO: change this to stretch 
        }}>
            {user.bio === EMPTY_BIO ? 'your bio is empty' : user.bio}
        </Text>
    )
}

// this is HELLA hard-coded lmfao
const Songs = () => {
    const [user, ,updateUser] = Store.useState("user");
    function RenderSongs() {
        if (user.songs[0].song != '') {
            return(
                <>
                    <View style={styles.songs}>
                        <MusicIcon color="#40187B" size="24"/>
                        <Text style={styles.songNameText}>{user.songs[0].song}
                            <Text style={styles.songArtistText}> {user.songs[0].artist}</Text>
                        </Text>
                    </View>
                    <View style={styles.songs}>
                        <MusicIcon color="#40187B" size="24"/>
                        <Text style={styles.songNameText}>{user.songs[1].song}
                            <Text style={styles.songArtistText}> {user.songs[1].artist}</Text>
                        </Text>
                    </View>
                    <View style={styles.songs}>
                        <MusicIcon color="#40187B" size="24"/>
                        <Text style={styles.songNameText}>{user.songs[2].song}
                            <Text style={styles.songArtistText}> {user.songs[2].artist}</Text>
                        </Text>
                    </View>
                </>
            );
        }

        // var songs = user.songs.items?.map((item) => {
        //     return(    
        //         <View style={styles.songs} key={item.key}>
        //             <MusicIcon color="#40187B" size="24"/>
        //             <Text style={styles.songNameText}>{item.song}
        //                 <Text style={styles.songArtistText}> {item.artist}</Text>
        //             </Text>
        //         </View>
        //     )
        // });
        return(
            <View style={styles.songs}>
                <Text style={styles.songTextBlank}>it's a little quiet here...</Text>
            </View>
        );
    }

    return(
        <RenderSongs/>
    );
}

const EditSongs = () => {
    const [user, ,updateUser] = Store.useState("user");

    const updateName = (name) => {
      updateUser(user => { user.username = name});
    }

    const updateSong = (song, i) => {
        updateUser(user => { user.songs[i].song = song });
    }

    const updateArtist = (artist, i) => {
        updateUser(user => { user.songs[i].artist = artist });
    }

    return(
        <SafeAreaView style={editStyles.songsPanel}>
            <SafeAreaView style={editStyles.songPanel}>
                <TextInput 
                placeholder={user.songs[0].song == '' ? "song name" : user.songs[0].song} 
                style={editStyles.editSongName} 
                onChangeText={(song) => updateSong(song, 0)}>
                    {user.songs[0].song}
                </TextInput>
                <Text style={{alignSelf: 'center'}}>   by  </Text>
                <TextInput placeholder={user.songs[0].artist == '' ? "song artist" : user.songs[0].artist}
                style={editStyles.editSongName} 
                onChangeText={(artist) => updateArtist(artist, 0)}>
                    {user.songs[0].artist}
                </TextInput>
            </SafeAreaView>
            <SafeAreaView style={editStyles.songPanel}>
                <TextInput 
                placeholder={user.songs[1].song == '' ? "song name" : user.songs[1].song} 
                style={editStyles.editSongName} 
                onChangeText={(song) => updateSong(song, 1)}>
                    {user.songs[1].song}
                </TextInput>
                <Text style={{alignSelf: 'center'}}>   by  </Text>
                <TextInput placeholder={user.songs[1].artist == '' ? "song artist" : user.songs[1].artist}
                style={editStyles.editSongName} 
                onChangeText={(artist) => updateArtist(artist, 1)}>
                    {user.songs[1].artist}
                </TextInput>
            </SafeAreaView>
            <SafeAreaView style={editStyles.songPanel}>
                <TextInput 
                placeholder={user.songs[2].song == '' ? "song name" : user.songs[2].song} 
                style={editStyles.editSongName} 
                onChangeText={(song) => updateSong(song, 2)}>
                    {user.songs[2].song}
                </TextInput>
                <Text style={{alignSelf: 'center'}}>   by  </Text>
                <TextInput placeholder={user.songs[2].artist == '' ? "song artist" : user.songs[2].artist}
                style={editStyles.editSongName} 
                onChangeText={(artist) => updateArtist(artist, 2)}>
                    {user.songs[2].artist}
                </TextInput>
            </SafeAreaView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    topPanel: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        textAlign: "left",
    },
    profilePanel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    namePanel: {
        flexDirection: 'row',
    },
    tagPanel: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
    },
    housesPanel: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
    },
    songsPanel: {
        flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
    },
    contentPanel: {
        flex: 15,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
      },
    settingsIcon: {
        alignSelf: 'flex-end',
        margin: 15,
    },
    profileBackground: {
        backgroundColor: '#47C8A7',
        borderRadius: 100, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 31,
        width: 120,
        height: 120,
    },
    profileIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 30,
        fontFamily: 'WorkSans-Regular',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5,
    },
    editIcon: {
        paddingTop: 20,
        paddingLeft: 20
    },
    tag: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#FFEBC6',
        borderWidth: 1,
        borderColor: '#FFEBC6',
        borderRadius: 24,
        padding: 10,
    },
    addTag: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#FDC765',
        borderWidth: 1,
        borderColor: '#FDC765',
        borderRadius: 100,
        padding: 10,
        paddingHorizontal: 15,
    },
    tagText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        justifyContent: 'center',
    },
    sectionHeading: {
        fontSize: 24,
        fontFamily: 'WorkSans-Regular',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    house: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#40187B',
        borderWidth: 1,
        borderColor: '#40187B',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 94,
        minWidth: 94,
        minHeight: 120,
        maxHeight: 120
    },
    houseText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'WorkSans-Regular',
        paddingTop: 8,
        fontSize: 16
    },
    plusIcon : {
        margin: 30,
    },
    songs: {
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12
    },
    songNameText: {
        color: '#61646B',
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        paddingLeft: 15
    },
    songArtistText: {
        color: '#61646B',
        fontsize: 16,
        fontFamily: 'WorkSans-Regular'
    },
    songTextBlank: {
        color: '#61646B',
        fontsize: 16,
        fontFamily: 'WorkSans-Italic',
    },
    browseHousesButton: {
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        height: 37,
        borderRadius: 28,
    },
    emptyText: {
        fontSize: 14,
        fontFamily: 'WorkSans-Regular',
        color: '#61646B'
    },
    backIcon: {
        margin: 20,
        width: 50,
        height: 35
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
      container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      itemText: {
        color: "rgba(0, 0, 0, 0.5)",
        textAlign: "center",
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
});

const editStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    topPanel: {
        //flex: 1,
        //backgroundColor: "#FFFFFF",
        textAlign: "left",
    },
    profilePanel: {
        //flex: 1,
        alignItems: 'left',
        justifyContent: 'center'
    },
    songsPanel: {
        //flex: 1,
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 16, 
        fontFamily: 'WorkSans-Regular',
    },
    songPanel: {
        flexDirection: 'row',
        marginBottom: 10
    },
    sectionHeading: {
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 15,
        fontSize: 24,
        fontFamily: 'WorkSans-Regular',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    editName: {
        padding: 10,
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        borderColor: '#AFB1B6',
        borderWidth: 1,
        textAlign: 'left',
        borderRadius: 5,
        minWidth: '80%',
        maxWidth: '80%',
        alignSelf: 'center',
    },
    editBio: {
        padding: 10,
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        borderColor: '#AFB1B6',
        borderWidth: 1,
        textAlign: 'left',
        borderRadius: 5,
        minWidth: '80%',
        maxWidth: '80%',
        alignSelf: 'center',
    },
    editSongName: {
        padding: 10,
        fontSize: 16,
        fontFamily: 'WorkSans-Regular',
        borderColor: '#AFB1B6',
        borderWidth: 1,
        textAlign: 'left',
        borderRadius: 5,
        minWidth: '45%',
        maxWidth: '45%',
        alignSelf: 'center',
    },
    backIcon: {
        margin: 20,
        width: 35,
        height: 24,
    },
});

export { ProfileScreen, EditProfileScreen, EditTagsScreen, SettingsScreen };