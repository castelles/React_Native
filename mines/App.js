
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import params from './src/params';
import styles from './src/styles/Styles';
import Field from './src/components/Field';
import Flag from './src/components/Flag';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Starting Mines...</Text>
        <Text style={styles.welcome}>
          Matrix size: {params.getRowsAmount()} X {params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded/>
        <Field flagged />
        <Field flagged opened/>

      </View>
    )
  }
}

export default App;
