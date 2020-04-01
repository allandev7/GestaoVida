import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './styles';
import { PermissionsAndroid } from 'react-native';
import { getData, setData } from '../service/LocalBackend'
import PieChart from 'react-native-pie-chart';
import Spinner from 'react-native-loading-spinner-overlay';
import ViewShot from "react-native-view-shot";
import RNFS from 'react-native-fs';
// import { Container } from './styles';



export default function Config({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [despesas, setDespesas] = useState('');

  

  useEffect(() => {
    buscarDados();
  }, [loading]);

  const checkAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  function buscarDados() {
    getData('despesas').then(x => {
      x == undefined ?
        setDespesas({ alimento: 0, lazer: 0, metas: 0, presente: 0, transporte: 0 }) :
        setDespesas(JSON.parse(x));
      console.log(x);
    }
    );
    getData('investimentos').then(x => {
      x == undefined ?
        setInvestimentos(0) :
        setInvestimentos(parseFloat(x.replace('R$', '').replace('.', '')));
    });
    getData('fixos').then(x => {
      x == undefined ?
        setFixos(0) :
        setFixos(parseFloat(x.replace('R$', '').replace('.', '')));
      setLoading(false);
    }
    );
  }

  const [investimentos, setInvestimentos] = useState('');
  const [tempUri, setTempUri] = useState('');
  const [fixos, setFixos] = useState('');

  const chart_wh = 250
  const series = [despesas.alimento || 0.1, despesas.lazer || 0.1, despesas.metas || 0.1, despesas.presente || 0.1, despesas.transporte || 0.1, investimentos || 0.1, fixos || 0.1];
  const sliceColor = ['#6A5ACD', '#836FFF', '#6959CD', '#191970', '#6495ED', '#98FB98', '#ADD8E6'];


  function zerar() {
    setData('salario', '');
    setData('extra', '');
    setData('investimentos', '');
    setData('fixos', '');
    setData('sobra', '');
    setData('despesas', JSON.stringify({ alimento: 0, lazer: 0, metas: 0, presente: 0, transporte: 0 }));
  }

  async function finalizar() {
    await checkAndroidPermission();
    const dia = new Date().getUTCDay();
    const mes = new Date().getMonth() + 1;
    const ano = new Date().getFullYear();
    const filename = "Relatorio" + dia + "-" + mes + "-" + ano + ".png";
    RNFS.copyFile(tempUri, RNFS.PicturesDirectoryPath + "/" + filename).then(() => {
      setDespesas({ alimento: 0, lazer: 0, metas: 0, presente: 0, transporte: 0 });
      Alert.alert("Sucesso", "Relatório salvo com sucesso, e o mês será zerado...");
      zerar();
      navigation.navigate('Config');
    }
    ).catch(err => Alert.alert("Erro", err));
  }


  return (

    <View style={styles.allContainer}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
      />
      <View style={styles.mainContainer}>
        {/* <Image style={{height:600, width:"100%", resizeMode:"center"}} source={{uri: tempUri}}/> */}
        <ViewShot onCapture={uri => {
          setTempUri(uri);
        }} captureMode="continuous" style={styles.containerGrafico}>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          <View style={styles.legenda}>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[0] }]} />
              <Text>Alimentação: R${despesas.alimento}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[1] }]} />
              <Text>Lazer: R${despesas.lazer}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[2] }]} />
              <Text>Metas: R${despesas.metas}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[3] }]} />
              <Text>Presentes: R${despesas.presente}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[4] }]} />
              <Text>Transporte: R${despesas.transporte}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[5] }]} />
              <Text>Investimentos: R${investimentos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.circle, { backgroundColor: sliceColor[6] }]} />
              <Text>Gastos Fixos: R${fixos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Text>
            </View>
          </View>
        </ViewShot>
        <TouchableOpacity onPress={() => finalizar()} style={[styles.btn, { backgroundColor: "#333" }]}>
          <Text style={styles.txtBtn}>
            Finalizar Mês
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}