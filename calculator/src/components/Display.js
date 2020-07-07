import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/Styles';

export default props => (
  <View style={Styles.display}>
    <Text numberOfLines={1} style={Styles.displayValue}>
      {props.value}
    </Text>
  </View>
);
