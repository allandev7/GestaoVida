import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    allContainer: {
        backgroundColor: "#FFF",
        height: "100%",
        alignItems: "center"
    },
    saldoAtual: {
        flexDirection: "row",
        justifyContent: "center",
        top: '5%'
    },
    txtSaldoAtual:{
        fontSize:hp('2%'),
        color: '#6959CD'
    },
    mainContainer: {
        height: "95%",
        top: '5%',
        borderRadius: 25,
        elevation: 10,
        backgroundColor: '#FFFAFA',
        margin: "3%",
        width: "95%",
        alignItems: "center"
    },
    containerGrafico: {
        top: "2%",
        backgroundColor: '#FFFAFA'
    },
    circle: {
        height: hp("2.2%"),
        width: hp("2.2%"),
        borderRadius: 50,
        marginRight: 10
    },
    legenda: {
        height: "45%",
        paddingTop: "10%",
        justifyContent: "space-between"
    },
    btn: {
        width: '90%',
        height: '7%',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#7B68EE",
        borderRadius: 25,
        justifyContent: "center",
    },
    txtBtn: {
        color: '#FFF',
        fontSize: hp('2.5%')
    }
})

export default styles;