import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function TextNavigatorComponent({ children, targetPath, style }) {

  return (

    <TouchableOpacity onPress={targetPath}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
}


export default TextNavigatorComponent;