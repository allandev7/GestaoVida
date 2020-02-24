import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    all: {
        height: '100%',
        backgroundColor: '#FFFAFA',
        

    },
    modal:{
        height:'20%',
        width:'90%',
        borderRadius:25,
        alignItems:"center"
    },
    inputModal:{
        width:'90%',
        backgroundColor:'#FFFAFF',
        borderRadius:25,
        color: "#7B68EE",
        textAlign:"center",
        marginTop:25,
        marginBottom:25
    },
    botaoModal:{
        width:"80%",
        backgroundColor: "#7B68EE"
    },
    titleModal:{
        fontSize:25,
        alignSelf:"center",
        color: "#7B68EE",
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    allContainer: {
        backgroundColor:'#FFFAFA',
        width: '100%',
        paddingBottom: 100
    },
    mainContainer: {
        maxHeight: 300,
        top: '2%',
        borderRadius: 5,
        elevation: 10,
        backgroundColor: '#FFFAFA',
        margin: "3%",
        width: "95%"
    },
    txtMain: {
        fontSize: 30,
        height:50,
        color: "#7B68EE",
        alignSelf: "center",
        alignItems: "center",
        textAlign: "center"
    },
})

export default styles;