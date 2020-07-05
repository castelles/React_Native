import React from 'react';
import {View} from 'react-native';
import Style from '../../styles/Style';

const Circle = (props) => <View style={Style.circle} />;

export default (props) => {
  return (
    <View style={Style.flexContainer}>
      <View style={Style.norte}>
        <Circle />
      </View>
      <View style={Style.centro}>
        <Circle />
        <Circle />
        <Circle />
      </View>
      <View style={Style.sul}>
        <Circle />
      </View>
    </View>
  );
};
