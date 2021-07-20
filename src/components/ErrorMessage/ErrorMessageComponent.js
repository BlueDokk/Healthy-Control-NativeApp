import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function ErrorMessageComponent({ error, visible }) {

    if (!visible || !error) return null;

    return <Text style={styles.error}>{error}</Text>;
}

export default ErrorMessageComponent;