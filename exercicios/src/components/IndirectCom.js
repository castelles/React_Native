import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Style from '../../styles/Style';

export const InputText = (props) => (
  <View>
    <TextInput
      value={props.input}
      style={Style.input}
      onChangeText={props.callOnChange}
    />
  </View>
);

export class SyncText extends Component {
  state = {
    input: '',
  };

  changeText = (input) => {
    this.setState({input});
  };

  render() {
    return (
      <View>
        <Text style={Style.font40}>{this.state.input}</Text>
        <InputText input={this.state.input} callOnChange={this.changeText} />
      </View>
    );
  }
}
