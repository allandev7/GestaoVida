import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getData, setData } from '../service/LocalBackend'

// import { Container } from './styles';

export default function Index({ navigation }) {
  useEffect(() => {
    getData('salario').then(x =>
      setSalario(x.replace('R$', '').split(',')[0].replace('.', ''))
    );
    getData('pGrande').then(x =>
      setPgrande(x.replace('%', '').split(',')[0])
    );
    getData('pMedio').then(x =>
      setPmedio(x.replace('%', '').split(',')[0])
    );
    getData('sobra').then(x =>
      setSobra(x)
    );
  }, []);

  const [salario, setSalario] = useState('');
  const [pGrande, setPgrande] = useState('');
  const [pMedio, setPmedio] = useState('');
  const [sobra, setSobra] = useState('');
  return (
    <>
      <StatusBar backgroundColor='#6959CD' />
      <View style={styles.allContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.txtMain}>
            R${salario.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </Text>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Quantia para Longo
            </Text>
            <Text style={styles.subTxt}>
              R${(salario* pGrande / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Quantia para Medio
            </Text>
            <Text style={styles.subTxt}>
            R${(salario* pMedio / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Saldo Extra
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Quantia de Extras:
            </Text>
            <Text style={styles.subTxt}>
              R$100
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Metas:
            </Text>
            <Text style={styles.subTxt}>
              R$700
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Quanto Deve Sobrar:
            </Text>
            <Text style={styles.subTxt}>
              R${sobra}
            </Text>
          </View>
        </View>



        <View style={styles.mainContainer}>
          <Text style={styles.txtMain}>
            Compras do mês
          </Text>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Alimento
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Lazer
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Metas
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Presente
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Transporte
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>

        </View>



      </View>
    </>
  );
}