import React from 'react';
import { Text } from 'react-native';
import Screen from '../../components/ScreenTag/ScreenTagComponent';

import styles from './styles';


function ProfileScreen(props) {
  return (
    <Screen style={styles.container}>
        <Text>Profile Screen</Text>
    </Screen>
  );
}

export default ProfileScreen;