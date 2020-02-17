import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    allContainer:{
        backgroundColor:"#FFF",
        height:"100%",
        alignItems:"center"
    },
    mainContainer:{
        height:"95%",
        top:'5%',
        borderRadius:25,
        elevation:10,
        backgroundColor:'#FFFAFA',
        margin:"3%",
        width:"95%"
    },
    txtMain:{
        margin:'10%',
        fontSize:20,
        color:"#7B68EE",
        alignSelf:"center",
        alignItems:"center",
        textAlign:"center"
    },
    btn:{
        top:'15%',
        width:'90%',
        height:'7%',
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"#7B68EE",
        borderRadius:25,
        justifyContent:"center",
        
    },
    txtBtn:{
        color:'#FFF',
        fontSize:20
    }
})

export default styles;