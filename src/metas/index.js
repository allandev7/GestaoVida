import React, { useState, forwardRef, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Button, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox'
import { getData, setData } from '../service/LocalBackend'
import { set } from 'react-native-reanimated';

// import { Container } from './styles';



export default function Index() {
  const [check, setCheck] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [meta, setMeta] = useState('');
  const [modal, setModal] = useState(false);
  const [mes, setMes] = useState([]);
  const [aux, setAux] = useState([]);

  useEffect(()=> {
    getData('vetorMes').then(x =>{
       setMes(x);
       console.log(x);
    })
  },[]);

  async function adicionarMeta() {
    console.log(meta.length)
    if(meta == ''){
      Alert.alert('Alerta', 'A meta precisa ter pelo menos 2 caracteres')
    }else if(meta.length >= 2){
      if(mes == undefined){
        aux.push(meta);
        setMes(aux);
      }else {
        setAux(meta);
        useEffect(()=>{
          setMes([...mes, aux]);
        },[aux]);
      }
    }
    console.log(mes)
  }
  
  return (
    <View style={styles.all}>

      <Modal
        style={styles.modal}
        isOpen={modal}
        swipeToClose={true}
        onClosed={()=>setModal(false)}>
        <Text style={styles.titleModal}> Adiconar Meta</Text>
        <TextInput onChangeText={(txt) => { setMeta(txt) }} value={meta} tyle={styles.inputModal} placeholder="Meta" />
        <Button onPress={() => adicionarMeta()} color="#7B68EE" title="Adicionar" />
      </Modal>

      <ScrollView style={{ flexGrow: 1 }} scrollEnabled={scroll} contentContainerStyle={styles.allContainer}>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Compras Mês
          </Text>
            <Icon name="plus-circle" onPress={()=> setModal(true)} size={25} color='#7B68EE' />
          </View>

          <ScrollView style={{ flexGrow: 1 }} onTouchStart={() => setScroll(false)} onScrollEndDrag={() => setScroll(true)} contentContainerStyle={[styles.allContainer, { zIndex: 2 }]} >
            <CheckBox
              title='Click Here'
              checked={check}
              onPress={() => setCheck(!check)}
            />

          </ScrollView>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Projetos
          </Text>
            <Icon name="plus-circle" onPress={()=> setModal(true)} size={25} color='#7B68EE' />
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Livros
          </Text>
            <Icon name="plus-circle" onPress={()=> setModal(true)} size={25} color='#7B68EE' />
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Meta Anual
          </Text>
            <Icon name="plus-circle" onPress={()=> setModal(true)} size={25} color='#7B68EE' />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
