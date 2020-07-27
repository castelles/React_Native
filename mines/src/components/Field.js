import React from 'react';
import { View, Text } from 'react-native';
import params from '../params';
import Styles from '../../src/styles/Styles';
import Mine from './Mine';
import Flag from './Flag';

export default props => {

    const {mined, opened, nearMines, exploded, flagged} = props;

    const styleField = [Styles.field];

    /**
     * Check styles
     */
    if (opened) styleField.push(Styles.opened);
    if (exploded) styleField.push(Styles.exploded);
    if (flagged) styleField.push(Styles.flagged);
    if (styleField.length === 1) styleField.push(Styles.regular);

    let color = null;
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7';
        if (nearMines == 2) color = '#2B520F';
        if (nearMines > 2 && nearMines < 6) color = '#F9060A';
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
            <Text style={[Styles.label, {color: color}]}>{nearMines}</Text> : 
            false}
            {mined && opened ? <Mine /> : false}
        </View>
    )
}