import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    allContainer:{
        backgroundColor:"#FFF",
        height:"100%",
        alignItems:"center"
    },
    modal: {
        zIndex:100,
        top: -100,
        height: '30%',
        width: '90%',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: '#FFF',
        elevation:100
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
    mainContainer:{
        minHeight:"45%",
        maxHeight:"60%",
        borderRadius:25,
        elevation:10,
        backgroundColor:'#FFFAFA',
        margin:"3%",
        width:"90%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    txtMain:{
        alignSelf:"center",
        fontSize:hp("3%"),
        color:"#7B68EE",
    },
    subContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        alignSelf:"center",
        marginTop:"5%",
        alignItems:"center"
    },
    subTxt:{
        fontFamily: 'Roboto',
        fontSize:hp("2.5%"),
    }
})

export default styles;