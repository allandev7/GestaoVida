import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { getData, setData } from '../service/LocalBackend'
import PieChart from 'react-native-pie-chart';
import Spinner from 'react-native-loading-spinner-overlay';


// import { Container } from './styles';



export default function Config({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [despesas, setDespesas] = useState('');

  useEffect(() => {
    buscarDados();
  }, [loading]);

  function buscarDados() {
    getData('despesas').then(x => {
      setDespesas(JSON.parse(x));
      setLoading(false);
    }
    );
    getData('investimentos').then(x => {
      setInvestimentos(parseFloat(x.replace('R$', '').replace(',', '.')));
    });
    getData('fixos').then(x => {
      setFixos(parseFloat(x.replace('R$', '').replace(',', '.')));
    }
    );
  }

  const [investimentos, setInvestimentos] = useState('');
  const [fixos, setFixos] = useState('');

  const chart_wh = 250
  // const series = [90,31,0,53,23]
  const series = [despesas.alimento || 0.1 , despesas.lazer || 0.1, despesas.metas || 0.1, despesas.presente || 0.1, despesas.transporte || 0.1, investimentos || 0.1, fixos || 0.1];
  const sliceColor = ['#6A5ACD', '#836FFF', '#6959CD', '#191970', '#6495ED', '#98FB98', '#ADD8E6']


  return (

    <View style={styles.allContainer}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#fff' }}
      />
      <View style={styles.mainContainer}>
        <View style={styles.containerGrafico}>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          <View style={styles.legenda}>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[0]}]}/>
              <Text>Alimentação: R${despesas.alimento}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[1]}]}/>
              <Text>Lazer: R${despesas.lazer}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[2]}]}/>
              <Text>Metas: R${despesas.metas}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[3]}]}/>
              <Text>Presentes: R${despesas.presente}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[4]}]}/>
              <Text>Transporte: R${despesas.transporte}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[5]}]}/>
              <Text>Investimentos: R${investimentos}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.circle, {backgroundColor:sliceColor[6]}]}/>
              <Text>Gastos Fixos: R${fixos}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => alterar()} style={[styles.btn, { backgroundColor: "#333" }]}>
          <Text style={styles.txtBtn}>
            Finalizar Mês
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}