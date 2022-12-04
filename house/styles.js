import {StyleSheet} from "react-native";

export default StyleSheet.create({
    background: {
        flex: 1,
    },
    topPanel: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        textAlign: 'left'
    },
    contentPanel: {
        flex: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: 86,
        height: 96,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 22,
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        marginHorizontal: 46,
        paddingBottom: 18,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Regular',
    },
    houseText: {
        fontSize: 24,
        color: '#FB749B',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Regular',
    },
    bodyText: {
        fontSize: 16,
        color: '#61646B',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Regular',
        marginLeft: 46,
        marginRight: 46,
    },
    button: {
        backgroundColor: '#FDC765',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        width: 128,
        height: 45,
        borderRadius: 24,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#AFB1B6',
        width: '80%',
        padding: 12,
        borderRadius: 8,
        fontFamily: 'WorkSans-MediumItalic'
    },
    locationInput: {
        borderWidth: 1,
        borderColor: '#AFB1B6',
        padding: 12,
        borderRadius: 8,
        fontFamily: 'WorkSans-MediumItalic'
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'WorkSans-Medium',
        color: 'white',
    },
    backIcon: {
        margin: 20,
    },
    slider: {
        width: 300,
    },
    sliderText: {
        fontSize: 16,
        fontFamily: 'WorkSans-Medium',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        paddingTop: 12,
        fontSize: 18,
        color: '#000',
        marginTop: 20,
        paddingHorizontal: 10,
        textAlign: 'left',
        fontFamily: 'WorkSans-Medium',
    },
    item: {
        marginHorizontal: 6,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 24,
        padding: 10
    },
    itemText: {
        color: 'rgba(0, 0, 0, 0.5)',
        marginTop: 5,
    },
});