import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { getData, setData } from '../service/LocalBackend'

// import { Container } from './styles';



export default function Config({ navigation }) {

  

  useEffect(() => {
    navigation.addListener('didFocus', () => {
      buscarDados();
    });
  }, []);

  function buscarDados() {
    getData('salario').then(x =>
      setSalario(x)
    );
    getData('investimentos').then(x =>
      setInvestimentos(x)
    );
    getData('fixos').then(x =>
      setFixos(x)
    );
    getData('sobra').then(x =>
      setSobra(x)
    );
  }

  const [salario, setSalario] = useState('');
  const [investimentos, setInvestimentos] = useState('');
  const [fixos, setFixos] = useState('');
  const [sobra, setSobra] = useState('');


  function alterar() {
    if (salario == undefined || investimentos == undefined || fixos == undefined || sobra == undefined) {
      Alert.alert('Erro','Preencha os campos corretamentes, se vazio use 0');
    } else {
      setData('salario', salario);
      setData('investimentos', investimentos);
      setData('fixos', fixos);
      setData('sobra', sobra);
      Alert.alert('Sucesso', 'Dados alterados com sucesso');
    }

  }




  return (

    <View style={styles.allContainer}>
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInputMask type={'money'} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }} value={salario}
            onChangeText={text => {
              setSalario(text)
            }} style={styles.txtMain} placeholder='Informe Seu Salário' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInputMask type={'money'} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}  keyboardType="number-pad" style={styles.txtMain} value={investimentos} onChangeText={text => setInvestimentos(text)} placeholder='Para investimentos' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInputMask type={'money'} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}  keyboardType="number-pad" style={styles.txtMain} value={fixos} onChangeText={text => setFixos(text)} placeholder='Gastos Fixos' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInputMask type={'money'} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}  keyboardType="number-pad" style={styles.txtMain} value={sobra} onChangeText={text => setSobra(text)} placeholder='Deixar em caixa' selectionColor='blue' />
        </View>
      </View>
      <View>
        
      </View>
      <TouchableOpacity onPress={() => alterar()} style={styles.btn}>
          <Text style={styles.txtBtn}>
            Alterar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Relatorio")} style={[styles.btn, {backgroundColor:"#333"}]}>
          <Text style={styles.txtBtn}>
            Relatório Mês
          </Text>
        </TouchableOpacity>
    </View>
  );
}