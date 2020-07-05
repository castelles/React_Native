import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Style from '../../styles/Style';

export default class Event extends Component {
  state = {
    inputText: '',
  };

  changeText = (inputText) => {
    this.setState({inputText});
  };

  render() {
    return (
      <View style={Style.standardInput}>
        <Text style={Style.font40}>{this.state.inputText}</Text>
        <TextInput
          value={this.state.inputText}
          style={Style.input}
          onChangeText={this.changeText}
        />
      </View>
    );
  }
}
