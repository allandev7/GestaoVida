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
        width:"95%",
        alignItems:"center"
    },
    containerGrafico:{
        top:20
    },
    circle:{
        height:20,
        width:20,
        borderRadius:50,
        marginRight: 10
    },
    legenda:{
        height:"45%",
        paddingTop:50,
        justifyContent:"space-between"
    },
    btn:{
        width:'90%',
        height:'7%',
        alignItems:"center",
        alignSelf:"center",
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