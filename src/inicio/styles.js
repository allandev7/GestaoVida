import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    allContainer:{
        backgroundColor:"#FFF",
        height:"100%",
        alignItems:"center"
    },
    mainContainer:{
        height:"43%",
        borderRadius:25,
        elevation:10,
        backgroundColor:'#FFFAFA',
        margin:"5%",
        width:"90%"
    },
    txtMain:{
        alignSelf:"center",
        fontSize:30,
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
        fontSize:20
    }
})

export default styles;