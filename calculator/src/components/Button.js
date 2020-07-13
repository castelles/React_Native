import React from 'react';
import {Text, Dimensions, TouchableHighlight} from 'react-native';
import Styles from '../styles/Styles';

export default props => {
  const stylesButton = [Styles.button];

  if (props.double) {
    stylesButton.push(Styles.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(Styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(Styles.operationButton);
  }

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}> {props.label} </Text>
    </TouchableHighlight>
  );
};
