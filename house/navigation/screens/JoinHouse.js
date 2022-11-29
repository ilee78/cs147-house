import * as React from 'react';
import { View, Text } from 'react-native';

function NormsScreen({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <SafeAreaView style={styles.topPanel}>
                <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <BackIcon/>
                </Pressable>
            </SafeAreaView>
        </SafeAreaView>

        // pressable for the i understand box
        // pressable for the join house button
        // planning on just using a scrollview for the rules/norms, i dont expect a flatlist will be necessary
        // update json
    );
}

function WelcomeHomeScreen({navigation}) {
    return(
        <View>
            <Text>welcome home screen</Text>
        </View>

        // need: pressable for the X button
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#40187B',
    },

    topPanel: {
        flex: 1,
        backgroundColor: '#40187B',
        textAlign: 'left'
    },

    houseName: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'WorkSans-Light',
    },

    rulesAndNormsHeader: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
    },

    // do i have to separate the box and the text??? bruh

    rulesAndNorms: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#AFB1B6',
        width: '84%',
        padding: 12,
        borderRadius: 5,
        fontFamily: 'WorkSans-Regular',
    }

});

export { NormsScreen, WelcomeHomeScreen };