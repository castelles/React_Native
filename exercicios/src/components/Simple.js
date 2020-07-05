import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../../styles/Style';

export default (props) => (
  <View style={Styles.standard}>
    <Text style={Styles.title}>{props.input}</Text>
  </View>
);
