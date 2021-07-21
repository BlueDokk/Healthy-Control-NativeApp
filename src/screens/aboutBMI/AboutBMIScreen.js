import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/ScreenTag/ScreenTagComponent';

import styles from './styles';

function aboutBMIScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text>About BMI Screen</Text>
    </Screen>
  );
}

export default aboutBMIScreen;