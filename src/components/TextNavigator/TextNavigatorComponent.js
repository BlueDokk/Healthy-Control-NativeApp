import React from 'react';
import { StyleSheet, Text } from 'react-native';

function TextNavigatorComponent({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {

  }
});

export default TextNavigatorComponent;