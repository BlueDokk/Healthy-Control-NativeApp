import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../config/colors';

function ItemProfileComponent({ icon, label, onPress, size=30 }) {
    return (
        <TouchableHighlight
            style={styles.itemContainer}
            underlayColor="#ffff"
            onPress={onPress}
        >
            <>
                <FontAwesome5
                    name={icon}
                    size={size}
                    color={colors.primary}
                    style={styles.iconItem}
                />
                <Text style={styles.itemText}>{label}</Text>
            </>

        </TouchableHighlight>
    );
}

export default ItemProfileComponent;