import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

export default function Index({navigation}) {
  return (
    <>
      <StatusBar backgroundColor='#6959CD' />
      <View style={styles.allContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.txtMain}>
            R$1.980,50
          </Text>
          <View style={styles.subContainer}>
          <Text style={styles.subTxt}>
              Total Poupado:
            </Text>
            <Text style={styles.subTxt}>
              R$4.700
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
              R$500
            </Text>
          </View>
        </View>



        <View style={styles.mainContainer}>
          <Text style={styles.txtMain}>
            Compras do mês
          </Text>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Compra Alimento
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Compra Lazer
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Compra Meta
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Compra Presente
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Compra Transporte
            </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
        
        </View>



      </View>
    </>
  );
}