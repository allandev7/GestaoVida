import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    allContainer:{
        backgroundColor:"#FFF",
        height:"100%",
        alignItems:"center",
        justifyContent: "space-between"
    },
    mainContainer:{
        top:'5%',
        borderRadius:25,
        elevation:10,
        backgroundColor:'#FFFAFA',
        margin:"3%",
        width:"95%"
    },
    txtMain:{
        margin:'7%',
        fontSize:hp('2.5%'),
        color:"#7B68EE",
        alignSelf:"center",
        alignItems:"center",
        textAlign:"center"
    },
    btn:{
        width:'90%',
        height:'7%',
        alignItems:"center",
        alignSelf:"flex-end",
        backgroundColor:"#7B68EE",
        borderRadius:25,
        justifyContent:"center",
        margin: 20
    },
    txtBtn:{
        color:'#FFF',
        fontSize:20
    }
})

export default styles;