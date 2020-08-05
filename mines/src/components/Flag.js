import React from 'react';
import { View } from 'react-native';
import Styles from '../styles/Styles';

export default props => {
    return (
        <View style={Styles.containerFlag}>
            <View style={[Styles.flagpole, props.bigger ? Styles.flagPoleBigger : false]} />
            <View style={[Styles.flag, props.bigger ? Styles.flagBigger : false]} />
            <View style={[Styles.base1, props.bigger ? Styles.base1Bigger : false]} />
            <View style={[Styles.base2, props.bigger ? Styles.base2Bigger : false]} />
        </View>
    )
}