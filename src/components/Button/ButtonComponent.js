import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import styles from './styles';

function ButtonComponent({ title, onPress, color = "primary",marginTop=40 }) {
    return (
        <TouchableOpacity
            style={[styles.button, {
                 backgroundColor: colors[color],
                 marginTop,
                }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}


export default ButtonComponent;