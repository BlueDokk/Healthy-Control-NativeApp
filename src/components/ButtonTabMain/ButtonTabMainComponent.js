import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from './styles';

function ButtonTabMainComponent({ children, onPress }) {
    return (
        <TouchableHighlight
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={onPress}
        >
            {children}
        </TouchableHighlight>
    );
}



export default ButtonTabMainComponent;