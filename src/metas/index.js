import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default function Index() {

  const [check, setCheck] = useState(false);
  const [scroll, setScroll] = useState(true);

  return (
    <View style={styles.all}>
      <ScrollView style={{ flexGrow: 1 }} scrollEnabled={scroll} contentContainerStyle={styles.allContainer}>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Compras Mês
          </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>

          <ScrollView style={{ flexGrow: 1 }} onTouchStart={() => setScroll(false)} onScrollEndDrag={() => setScroll(true)} contentContainerStyle={[styles.allContainer, { zIndex: 2 }]} >
            <CheckBox
              title='Click Here'
              checked={check}
              onPress={() => setCheck(!check)}
            />

            <CheckBox
              title='Click Here'
              checked={check}
              onPress={() => setCheck(!check)}
            />
            <CheckBox
              title='Click Here'
              checked={check}
              onPress={() => setCheck(!check)}
            />
            <CheckBox
              title='Click Here'
              checked={check}
              onPress={() => setCheck(!check)}
            />
            <CheckBox
              title='Click Here'
              checked={check}
              onPress={() => setCheck(!check)}
            />
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
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.head}>
            <Text style={styles.txtMain}>
              Livros
          </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
        </View>

        <View style={styles.mainContainer}>
        <View style={styles.head}>
            <Text style={styles.txtMain}>
              Meta Anual
          </Text>
            <Icon name="plus-circle" size={25} color='#7B68EE' />
          </View>
        </View>

      </ScrollView>
    </View>
  );
}
