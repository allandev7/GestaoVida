import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'
import { TextInputMask } from 'react-native-masked-text'

// import { Container } from './styles';

export default function Config() {

  const [salario, setSalario] = useState([]);
  const [pGrande, setPgrande] = useState([]);
  const [pMedio, setPmedio] = useState([]);
  const [sobra, setSobra] = useState([]);


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
          <TextInput keyboardType="number-pad" style={styles.txtMain} value={pGrande} onChange={ text => setPgrande(text)} placeholder='Porcentagem Grande Aquisição' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInput keyboardType="number-pad" style={styles.txtMain}  value={pMedio} onChange={ text => setPmedio(text)} placeholder='Porcentagem Média Aquisição' selectionColor='blue' />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
          <TextInput keyboardType="number-pad" style={styles.txtMain}  value={sobra} onChange={ text => setSobra(text)} placeholder='Sobra mês' selectionColor='blue' />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>
            Alterar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}