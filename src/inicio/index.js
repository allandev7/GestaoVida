import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, Text, RefreshControl, TextInput, Button, Alert } from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { getData, setData } from '../service/LocalBackend'
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import Spinner from 'react-native-loading-spinner-overlay';


// import { Container } from './styles';

export default function Index({ navigation }) {

  const [modal, setModal] = useState({ exibir: false, cat: '' });
  const [despesa, setDespesa] = useState('');
  const [despesas, setDespesas] = useState(undefined);
  const [salario, setSalario] = useState('');
  const [investimentos, setInvestimentos] = useState('');
  const [fixos, setFixos] = useState('');
  const [sobra, setSobra] = useState('');
  const [extra, setExtra] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.addListener('didFocus', () => {
      buscarDados();
    });  
  }, [loading]);

  useEffect(() => {
    if(despesas != undefined){
      setData('despesas', JSON.stringify(despesas));
    }
  }, [despesas]);

  useEffect(() => {
    if(extra != undefined){
      setData('extra', extra.toString());
    }
  }, [extra]);

  

  function buscarDados() {
    getData('salario').then(x =>{
      if(x==undefined){
        Alert.alert('Faça as configurações iniciais', 'Informe os seus dados na aba de configuração e depois atualize os dados na tela inicial',
        [{text:"Ir Agora", onPress:()=> navigation.navigate('Config')}]);
      }
      setSalario(x.replace('R$', '').replace('.', '').replace(',', '.'))
    }
    );
    getData('investimentos').then(x =>
      setInvestimentos(x.replace('R$', '').replace('.', '').replace(',', '.'))
    );
    getData('fixos').then(x =>
      setFixos(x.replace('R$', '').replace('.', '').replace(',', '.'))
    );
    getData('sobra').then(x =>
      setSobra(x.replace('R$', '').replace('.', '').replace(',', '.'))
    );
    getData('despesas').then((x) => {
        x==undefined ?
        setDespesas({ alimento: 0, lazer: 0, metas: 0, presente: 0, transporte: 0 }) :
        setDespesas(JSON.parse(x));
    });
    getData('extra').then((x) => {
      x == undefined ?
        setExtra(0) :
        setExtra(x);
      setLoading(false);
    });

  }

  function calcularTotal() {
    const nmrSalario = Number(salario);
    const nmrExtra = Number(extra);
    const nmrInvestimentos = Number(investimentos);
    const nmrFixos = Number(fixos);
    const nmrAlimento = Number(despesas?.alimento || 0);
    const nmrLazer = Number(despesas?.lazer || 0);
    const nmrPresente = Number(despesas?.presente || 0);
    const nmrTransporte = Number(despesas?.transporte || 0);
    const nmrMetas = Number(despesas?.metas || 0);
    return ((nmrSalario + nmrExtra) - nmrMetas - nmrInvestimentos - nmrFixos - nmrAlimento - nmrLazer - nmrPresente - nmrTransporte).toFixed(2);
  }

  function adicionarDespesa(categoria) {
    if(!Number(despesa)){
      console.log('oi');
      Alert.alert('Valor anormal', 'Digite um valor válido');
      return false;
    }
    const { alimento , lazer, transporte, presente, metas } = despesas == undefined ? 
    {alimento: 0, lazer:0, transporte:0, presente:0, metas:0}: despesas;
    if (despesa == '') {
      Alert.alert('Alerta', 'Digite a despesa corretamente')
    } else if (despesa.length >= 1) {
      if (categoria == 'Alimento') {
        setDespesas({ alimento: (parseFloat(alimento) + parseFloat(despesa)), lazer, transporte, metas, presente });
        Alert.alert('Sucesso', 'Despesa guardada com sucesso');
      } else if (categoria == 'Lazer') {
        setDespesas({ alimento, lazer: (parseFloat(lazer) + parseFloat(despesa)), transporte, metas, presente });
        Alert.alert('Sucesso', 'Despesa guardada com sucesso');
      } else if (categoria == 'Metas') {
        setDespesas({ alimento, lazer, transporte, metas: (parseFloat(metas) + parseFloat(despesa)), presente });
        Alert.alert('Sucesso', 'Despesa guardada com sucesso');
      } else if (categoria == 'Presente') {
        setDespesas({ alimento, lazer, transporte, metas, presente: (parseFloat(presente) + parseFloat(despesa)) });
        Alert.alert('Sucesso', 'Despesa guardada com sucesso');
      } else if (categoria == 'Transporte') {
        setDespesas({ alimento, lazer, transporte: (parseFloat(transporte) + parseFloat(despesa)), metas, presente });
        Alert.alert('Sucesso', 'Despesa guardada com sucesso');
      } else if (categoria == 'Extra') {
        setExtra(parseFloat(extra) + parseFloat(despesa));
        Alert.alert('Sucesso', 'Dinheirto extra guardado com sucesso');
      }
      setData('despesas', JSON.stringify(despesas));
      setModal({ exibir: false, cat: "" }, setDespesa(''))
    }
  }

  return (
    <ScrollView keyboardDismissMode='none' refreshControl={
      <RefreshControl refreshing={false} onRefresh={() => buscarDados()} />
    } contentContainerStyle={{ height: '100%' }}>

      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color:'#fff'}}
      />

      <Modal
      position={'center'}
        style={styles.modal}
        isOpen={modal.exibir}
        swipeToClose={true}
        onClosed={() => setModal({ exibir: false, cat: "" }, setDespesa(''))}>
        <Text style={styles.titleModal}> Adiconar {modal.cat == 'Extra' ? 'Extra' : 'Despesa'}</Text>
        <TextInput onChangeText={(txt) => setDespesa(txt)} value={despesa} style={styles.inputModal}
          keyboardType="number-pad" placeholder={modal.cat == 'Extra' ? 'Valor extra' : 'Valor da despesa'} />
        <Button onPress={() => adicionarDespesa(modal.cat)} color="#7B68EE" title="Adicionar" />
      </Modal>

      <StatusBar backgroundColor='#6959CD' />
      <View style={styles.allContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.txtMain}>
            R${calcularTotal().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </Text>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Investimentos
            </Text>
            <Text style={styles.subTxt}>
              R${investimentos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Gastos Fixos
            </Text>
            <Text style={styles.subTxt}>
              R${fixos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Adicionar Saldo Extra
            </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Extra" })} size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Quantia de Extras:
            </Text>
            <Text style={styles.subTxt}>
              R${extra}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Metas:
            </Text>
            <Text style={styles.subTxt}>
              R${despesas?.metas || 0}
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
            Adicionar Despesa
          </Text>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Alimento
            </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Alimento" })} size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Lazer
            </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Lazer" })} size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Metas
            </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Metas" })} size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Presente
            </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Presente" })} size={25} color='#7B68EE' />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subTxt}>
              Transporte
            </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Transporte" })} size={25} color='#7B68EE' />
          </View>

        </View>
      </View>
    </ScrollView>
  );
}