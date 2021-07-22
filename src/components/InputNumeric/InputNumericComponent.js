import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

function InputNumericComponent({
    label,
    value,
    onChangeText
}) {
    return (
        <View style={styles.inputNumeric}>
            <Text style={styles.labelInput}>{label}</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}


export default InputNumericComponent;