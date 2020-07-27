import React from 'react';
import { View } from 'react-native';
import Styles from '../styles/Styles';

export default props => {
    return (
        <View style={Styles.containerMine}>
            <View style={Styles.coreMine} />
            <View style={Styles.line}/>
            <View style={[Styles.line, {transform: [{rotate: '45deg'}]}]}/>
            <View style={[Styles.line, {transform: [{rotate: '90deg'}]}]}/>
            <View style={[Styles.line, {transform: [{rotate: '135deg'}]}]}/>
        </View>
    )
}