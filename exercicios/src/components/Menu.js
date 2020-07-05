import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Styles from '../../styles/Style';
import Simple from '../components/Simple';
import Counter from './Counter';
import Platforms from './Plataforms';
import ValidarProps from './ValidPrpos';
import Event from './Event';
import {Grandfather} from './DirectCom';
import {SyncText} from './IndirectCom';
import FlexList from './FlexList';
import Flex from './Flex';

const drawer = createDrawerNavigator(
  {
    HomeScreen: HomeScreen,
    FlexScreen: Flex,
    FlatListScreen: FlexList,
    ComunicationPropsScreenI: SyncText,
    ComunicationPropsScreenD: {
      screen: () => <Grandfather name="João" surname="Silva" />,
    },
    EventScreen: Event,
    PlatformsScreen: Platforms,
    ValidPropsScreen: {
      screen: () => <ValidarProps label={''} year={18} />,
    },
    CounterScreen: {
      screen: () => <Counter inicialNumber={5} />,
    },
    Simples: {
      screen: () => <Simple input="test" />,
      navigationOptions: {title: 'SimpleScreen'},
    },
  },
  {
    drawerWidth: 300,
  },
);

function HomeScreen() {
  return (
    <View style={Styles.standard}>
      <Text style={Styles.title}> HomeScreen </Text>
      <View style={Styles.container}>
        <Text style={Styles.title}>Olá</Text>
      </View>
    </View>
  );
}

const Menu = createAppContainer(drawer);

export default Menu;
