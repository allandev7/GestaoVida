import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    all: {
        height: '100%',
        backgroundColor: "#FFF",

    },
    head: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    allContainer: {
        backgroundColor: "#FFF",
        width: '100%',
        paddingBottom: 100
    },
    mainContainer: {
        maxHeight: 300,
        top: '2%',
        borderRadius: 25,
        elevation: 10,
        backgroundColor: '#FFFAFA',
        margin: "3%",
        width: "95%"
    },
    txtMain: {
        fontSize: 30,
        color: "#7B68EE",
        alignSelf: "center",
        alignItems: "center",
        textAlign: "center"
    },
})

export default styles;