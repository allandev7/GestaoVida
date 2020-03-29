import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    all: {
        height: '100%',
        backgroundColor: '#FFFAFA',
    },
    modal: {
        top: -100,
        height: '30%',
        width: '90%',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: '#FFF',
    },
    inputModal: {
        width: '90%',
        backgroundColor: '#FFFAFF',
        borderRadius: 25,
        color: "#7B68EE",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 25
    },
    botaoModal: {
        width: "80%",
        backgroundColor: "#7B68EE"
    },
    titleModal: {
        fontSize: 25,
        alignSelf: "center",
        color: "#7B68EE",
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    allContainer: {
        backgroundColor: '#FFFAFA',
        width: '100%',
        paddingBottom: 100,
    },
    allScroll: {
        backgroundColor: '#FFFAFA',
        width: '100%'
    },
    mainContainer: {
        top: '2%',
        borderRadius: 5,
        elevation: 10,
        backgroundColor: '#FFFAFA',
        margin: "3%",
        width: "95%",
        paddingBottom:20
    },
    txtMain: {
        fontSize: hp("3.5%"),
        fontFamily: 'Roboto',
        height: 50,
        color: "#7B68EE",
        alignSelf: "center",
        alignItems: "center",
        textAlign: "center"
    },
})

export default styles;