import React from 'react';
import {View, Text} from 'react-native';

const prop = {style: {fontSize: 30}};

const propsSons = (props) =>
  React.Children.map(props.children, (c) =>
    React.cloneElement(c, {...props, ...c.props}),
  );

export const Son = (props) => (
  <View>
    <Text {...prop}>
      {' '}
      Filho: {props.name} {props.surname}{' '}
    </Text>
  </View>
);

export const Father = (props) => (
  <View>
    <Text {...prop}>
      {' '}
      Pai: {props.name} {props.surname}{' '}
    </Text>
    {propsSons(props)}
  </View>
);

export const Grandfather = (props) => (
  <View>
    <Text {...prop}>
      {' '}
      Avô: {props.name} {props.surname}{' '}
    </Text>
    <Father name="Francys" surname={props.surname}>
      <Son name="Caio" />
      <Son name="Leticia" />
    </Father>
    <Father {...props} name="André">
      <Son name="Rebeca" />
      <Son name="Junior" />
    </Father>
  </View>
);
