import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import Styles from '../../styles/Style';

export default class Counter extends Component {
  state = {
    number: this.props.inicialNumber,
  };

  // constructor(props) {
  //   super(props);
  // }

  add = () => {
    this.setState({number: this.state.number + 1});
  };

  clear = () => {
    this.setState({number: this.props.inicialNumber});
  };

  render() {
    return (
      <View style={Styles.standard}>
        <Text style={Styles.title}>{this.state.number}</Text>
        <TouchableHighlight onPress={this.add} onLongPress={this.clear}>
          <Text style={Styles.button}>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
