import React from 'react';
import {ScrollView, SafeAreaView, View, FlatList, Text} from 'react-native';

const students = [
  {id: 1, name: 'João', grade: 7.9},
  {id: 2, name: 'Maria', grade: 5.9},
  {id: 3, name: 'Junior', grade: 0.5},
  {id: 4, name: 'Caio', grade: 10.0},
  {id: 5, name: 'Samara', grade: 5.2},
  {id: 6, name: 'Leticia', grade: 8.5},
  {id: 7, name: 'Solita', grade: 9.0},
  {id: 8, name: 'Cris', grade: 8.0},
  {id: 9, name: 'Asldas', grade: 6.6},
  {id: 11, name: 'João', grade: 7.9},
  {id: 12, name: 'Maria', grade: 5.9},
  {id: 13, name: 'Junior', grade: 0.5},
  {id: 14, name: 'Caio', grade: 10.0},
  {id: 15, name: 'Samara', grade: 5.2},
  {id: 16, name: 'Leticia', grade: 8.5},
  {id: 17, name: 'Solita', grade: 9.0},
  {id: 18, name: 'Cris', grade: 8.0},
  {id: 19, name: 'Asldas', grade: 6.6},
];

const itemStyle = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',
  //Flex
  //cross axis
  alignItems: 'center',
  //main axis
  // justifyContent: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const Student = (props) => (
  <View style={itemStyle}>
    <Text>Nome: {props.name}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.grade}</Text>
  </View>
);

export default () => {
  const renderItem = ({item}) => <Student {...item} />;

  return (
    <FlatList
      data={students}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
