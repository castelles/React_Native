import React from 'react';
import {Text, Dimensions, TouchableHighlight} from 'react-native';
import Styles from '../styles/Styles';

export default props => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={Styles.button}> {props.label} </Text>
    </TouchableHighlight>
  );
};
