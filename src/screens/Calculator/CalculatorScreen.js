import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/ScreenTag/ScreenTagComponent';

import styles from './styles';

function homeScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text>Calculator Screen</Text>
    </Screen>
  );
}



export default homeScreen;