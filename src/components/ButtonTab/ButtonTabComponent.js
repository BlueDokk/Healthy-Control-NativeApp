import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../config/colors';
import styles from './styles';

function ButtonTabComponent({ focused, size, icon, label, color = focused ? colors.white : colors.placeholder }) {
    return (
        <View style={styles.container}>
            <FontAwesome5
                name={icon}
                size={size}
                color={color}
            />
            {label && <Text
                style={[styles.text, { color: focused ? colors.white : colors.placeholder }]}>
                {label}
            </Text>}
        </View>
    );
}

export default ButtonTabComponent;