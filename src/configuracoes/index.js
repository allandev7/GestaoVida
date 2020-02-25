import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { getData, setData } from '../service/LocalBackend'

// import { Container } from './styles';



export default function Config({ navigation }) {
  useEffect(() => {
    buscarDados();
  }, []);

  function buscarDados() {
    getData('salario').then(x =>
      setSalario(x)
    );
    getData('pGrande').then(x =>
      setPgrande(x)
    );
    getData('pMedio').then(x =>
      setPmedio(x)
    );
    getData('sobra').then(x =>
      setSobra(x)
    );
  }

  const [salario, setSalario] = useState('');
  const [pGrande, setPgrande] = useState('');
  const [pMedio, setPmedio] = useState('');
  const [sobra, setSobra] = useState('');


  function alterar() {
    if (salario == undefined || pGrande == undefined || pMedio == undefined || sobra == undefined) {
      Alert.alert('Erro','Preencha os campos corretamentes, se vazio use 0');
    } else {
      setData('salario', salario);
      setData('pGrande', pGrande);
      setData('pMedio', pMedio);
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
            unit: '%',
          }} keyboardType="number-pad" style={styles.txtMain} value={pGrande} onChangeText={text => setPgrande(text)} placeholder='Porcentagem Grande Aquisição' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInputMask type={'money'} options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: '%',
            suffixUnit: ''
          }} keyboardType="number-pad" style={styles.txtMain} value={pMedio} onChangeText={text => setPmedio(text)} placeholder='Porcentagem Média Aquisição' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInput keyboardType="number-pad" style={styles.txtMain} value={sobra} onChangeText={text => setSobra(text)} placeholder='Sobra mês' selectionColor='blue' />
        </View>
        <TouchableOpacity onPress={() => alterar()} style={styles.btn}>
          <Text style={styles.txtBtn}>
            Alterar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}