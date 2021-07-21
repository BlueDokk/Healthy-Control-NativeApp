import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/ScreenTag/ScreenTagComponent';

import styles from './styles';


function RecordsScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text>Records Screen</Text>
    </Screen>
  );
}

export default RecordsScreen;