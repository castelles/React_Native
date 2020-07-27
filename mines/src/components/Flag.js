import React from 'react';
import { View } from 'react-native';
import Styles from '../styles/Styles';

export default props => {
    return (
        <View style={Styles.containerMine}>
            <View style={Styles.flagpole} />
            <View style={Styles.flag} />
            <View style={Styles.base1} />
            <View style={Styles.base2} />
        </View>
    )
}