import React, { useState, useContext } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet, Pressable, Image, View, SectionList, StatusBar, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SelectList } from "react-native-dropdown-select-list";
import Slider from "@react-native-community/slider";
import { SvgUri } from "react-native-svg";
import Logo from "../../assets/logo.png";
import BackIcon from "../../assets/back.js";
import Store from './../../Store';
import { EmptyNeighborhoodScreen } from "./Neighborhood";


function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <SafeAreaView style={styles.contentPanel}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.headerText}>
          welcome to
          <Text style={styles.houseText}> house</Text>
        </Text>
        <Text style={styles.bodyText}>
          help us get to know you better with a few questions!
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Name")}
        >
          <Text style={styles.buttonText}>next</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
}

function NameScreen({ navigation }) {

  const [user, ,updateUser] = Store.useState("user");
  const updateName = (name) => {
    updateUser(user => { user.username = name});
  }

  return (
    <SafeAreaView style={styles.background}>
      <SafeAreaView style={styles.topPanel}>
        <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.contentPanel}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.headerText}>what is your name?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="enter name..."
          onChangeText={(name) => updateName(name)}
        />
        <Pressable
          style={styles.button}
          onPress={() => {navigation.navigate("Location");}}
        >
          <Text style={styles.buttonText}>next</Text>
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomPanel}>
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "18%",
            height: 7,
            backgroundColor: "#40187B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
          }}
        />
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "72%",
            height: 5,
            backgroundColor: "#C6C6C6",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

// https://github.com/danish1658/react-native-dropdown-select-list
function LocationScreen({ navigation }) {

  const [user, ,updateUser] = Store.useState("user");
  const updateLocation = (location) => {
    updateUser(user => { user.location = location});
  }

  const data = [{ key: "1", value: "San Francisco, CA" }];

  return (
    <SafeAreaView style={styles.background}>
      <SafeAreaView style={styles.topPanel}>
        <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.contentPanel}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.headerText}>
          hi
          <Text style={styles.houseText}> {user.username}</Text>! where are you
          based?
        </Text>
        <SelectList
          boxStyles={styles.locationInput}
          placeholder="search locations..."
          fontFamily="WorkSans-MediumItalic"
          buttonStyle={styles.textInput}
          setSelected={(val) => updateLocation(val)}
          data={data}
          save="value"
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Travel")}
        >
          <Text style={styles.buttonText}>next</Text>
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomPanel}>
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "36%",
            height: 7,
            backgroundColor: "#40187B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
          }}
        />
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "54%",
            height: 5,
            backgroundColor: "#C6C6C6",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

function TravelScreen({ navigation }) {

  const [user, ,updateUser] = Store.useState("user");
  const updateDistance = (distance) => {
    updateUser(user => { user.distance = distance});
  }

  return (
    <SafeAreaView style={styles.background}>
      <SafeAreaView style={styles.topPanel}>
        <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.contentPanel}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.headerText}>
          how far are you willing to travel for events?
        </Text>
        <Slider
          style={styles.slider}
          onValueChange={(value) => updateDistance(value)}
          minimumValue={0}
          maximumValue={50}
          step={1}
          thumbTintColor="#40187B"
          minimumTrackTintColor="#40187B"
          maximumTrackTintColor="#C6C6C6"
        />
        <Text style={styles.sliderText}>{user.distance} mi</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Interest")}
        >
          <Text style={styles.buttonText}>next</Text>
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomPanel}>
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "54%",
            height: 7,
            backgroundColor: "#40187B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
          }}
        />
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "36%",
            height: 5,
            backgroundColor: "#C6C6C6",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
          }}
        />
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
        }}
      >
        <Text style={styles.itemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

function InterestScreen({ navigation }) {
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
        <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.contentPanel}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.headerText}>tell us about yourself!</Text>
        <Text style={styles.bodyText}>
          choose interests to put on your profile
        </Text>
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
          onPress={() => {
            navigation.navigate("Unpacking");
            tagsInputHandler();
          }}
        >
          <Text style={styles.buttonText}>next</Text>
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomPanel}>
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "72%",
            height: 7,
            backgroundColor: "#40187B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
          }}
        />
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "18%",
            height: 5,
            backgroundColor: "#C6C6C6",
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

function UnpackingScreen({ navigation }) {
  const [user, ,updateUser] = Store.useState("user");
  setTimeout(() => {
    navigation.navigate('Tabs', {screen: 'Neighborhood'}); //this.props.navigation.navigate('Login')
  }, 2000);
  // console.log(user.username);
  // console.log(user.location);
  // console.log(user.distance);
  // console.log(user.tags);

  return (
    <SafeAreaView style={styles.background}>
      <SafeAreaView style={styles.contentPanel}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.headerText}>  unpacking...</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.bottomPanel}>
        <SafeAreaView
          style={{
            marginTop: 20,
            width: "90%",
            height: 7,
            backgroundColor: "#40187B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

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
});

export { WelcomeScreen, NameScreen, LocationScreen, TravelScreen, InterestScreen, UnpackingScreen };
