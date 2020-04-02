import React, { useState, forwardRef, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Button, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modalbox'
import { getData, setData } from '../service/LocalBackend'

// import { Container } from './styles';



export default function Index() {
  const [scroll, setScroll] = useState(true);
  const [meta, setMeta] = useState('');
  const [modal, setModal] = useState({});
  const [mes, setMes] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [livros, setLivros] = useState([]);
  const [metaAno, setMetaAno] = useState([]);
  const [aux, setAux] = useState([]);

  useEffect(() => {
    buscarDados();
  }, []);

  useEffect(() => {
    setData('vetorMes', JSON.stringify(mes));
  }, [mes]);

  useEffect(() => {
    setData('vetorProjetos', JSON.stringify(projetos));
  }, [projetos]);

  useEffect(() => {
    setData('vetorLivros', JSON.stringify(livros));
  }, [livros]);

  useEffect(() => {
    setData('vetorMetas', JSON.stringify(metaAno));
  }, [metaAno]);

  function buscarDados() {
    getData('vetorMes').then(x => {
      setMes(JSON.parse(x));
    })
    getData('vetorProjetos').then(x => {
      setProjetos(JSON.parse(x));
    })
    getData('vetorLivros').then(x => {
      setLivros(JSON.parse(x));
    })
    getData('vetorMetas').then(x => {
      setMetaAno(JSON.parse(x));
    })
  }

  function adicionarMeta(txt) {
    if (txt == 'Mes') {
      if (meta == '') {
        Alert.alert('Alerta', 'A meta precisa ter pelo menos 2 caracteres')
      } else if (meta.length >= 2) {
        if (mes == undefined) {
          aux.push({ nome: meta, check: false });
          setMes(aux);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        } else {
          setMes([...mes, { nome: meta, check: false }]);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        }
      }
    } else if (txt == 'Projetos') {
      if (meta == '') {
        Alert.alert('Alerta', 'A meta precisa ter pelo menos 2 caracteres')
      } else if (meta.length >= 2) {
        if (projetos == undefined) {
          aux.push({ nome: meta, check: false });
          setProjetos(aux);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        } else {
          setProjetos([...projetos, { nome: meta, check: false }]);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        }
      }
    } else if (txt == 'Livros') {
      if (meta == '') {
        Alert.alert('Alerta', 'A meta precisa ter pelo menos 2 caracteres')
      } else if (meta.length >= 2) {
        if (livros == undefined) {
          aux.push({ nome: meta, check: false });
          setLivros(aux);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        } else {
          setLivros([...livros, { nome: meta, check: false }]);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        }
      }
    } else if (txt == 'Metas') {
      if (meta == '') {
        Alert.alert('Alerta', 'A meta precisa ter pelo menos 2 caracteres')
      } else if (meta.length >= 2) {
        if (metaAno == undefined) {
          aux.push({ nome: meta, check: false });
          setMetaAno(aux);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        } else {
          setMetaAno([...metaAno, { nome: meta, check: false }]);
          Alert.alert('Sucesso', 'Meta Adicionada com sucesso');
        }
      }
    }
    setMeta('');
    setModal({ exibir: false, cat: "" });
  }

  function checked(index, obj, txt) {
    let novo = { nome: obj.nome, check: !obj.check };
    console.log(novo);
    if (txt == 'Mes') {
      mes.splice(index, 1, novo);
      setData('vetorMes', JSON.stringify(mes));
      buscarDados();
    } else if (txt == 'Projetos') {
      projetos.splice(index, 1, novo);
      setData('vetorProjetos', JSON.stringify(projetos));
      buscarDados();
    } else if (txt == 'Livros') {
      livros.splice(index, 1, novo);
      setData('vetorLivros', JSON.stringify(livros));
      buscarDados();
    } else if (txt == 'Meta') {
      metaAno.splice(index, 1, novo);
      setData('vetorMetas', JSON.stringify(metaAno));
      buscarDados();
    }

  }

  return (
    <View style={styles.all}>

      <Modal
        style={styles.modal}
        isOpen={modal.exibir}
        swipeToClose={true}
        onClosed={() => {
          setModal({ exibir: false, cat: "" });
          setMeta('');
        }}>
        <Text style={styles.titleModal}> Adiconar Meta</Text>
        <Text style={styles.txtModal}>Se você coloca uma meta, você deve cumpri-la!! Está meta não sera apagada.</Text>
        <TextInput onChangeText={(txt) => { setMeta(txt) }} value={meta} style={styles.inputModal} placeholder="Meta" />
        <Button onPress={() => adicionarMeta(modal.cat)} color="#7B68EE" title="Adicionar" />
      </Modal>

      <ScrollView style={{ flexGrow: 1 }} onscr scrollEnabled={scroll} contentContainerStyle={styles.allContainer}>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Grandes Aquisições
          </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Mes" })} size={25} color='#7B68EE' />
          </View>

          {mes !== undefined ? mes.map((x, index) => (
            <CheckBox
              textStyle={{ fontFamily: 'Roboto' }}
              key={index}
              title={x.nome}
              checked={x.check}
              onPress={() => checked(index, x, "Mes")}
            />
          )) : null}
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Projetos
          </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Projetos" })} size={25} color='#7B68EE' />
          </View>

          {projetos !== undefined ? projetos.map((x, index) => (
            <CheckBox key={index}
              title={x.nome}
              checked={x.check}
              onPress={() => checked(index, x, "Projetos")}
            />
          )) : null}

        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Livros
          </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Livros" })} size={25} color='#7B68EE' />
          </View>

          {livros !== undefined ? livros.map((x, index) => (
            <CheckBox key={index}
              title={x.nome}
              checked={x.check}
              onPress={() => checked(index, x, "Livros")}
            />
          )) : null}

        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Meta Anual
          </Text>
            <Icon name="plus-circle" onPress={() => setModal({ exibir: true, cat: "Metas" })} size={25} color='#7B68EE' />
          </View>

          {metaAno !== undefined ? metaAno.map((x, index) => (
            <CheckBox key={index}
              title={x.nome}
              checked={x.check}
              onPress={() => checked(index, x, "Meta")}
            />
          )) : null}

        </View>

      </ScrollView>
    </View>
  );
}
