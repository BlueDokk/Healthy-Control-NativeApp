import React from 'react';
import { Text } from 'react-native';

import Screen from '../../components/ScreenTag/ScreenTagComponent';
import Title from '../../components/Title/TitleComponent';
import AccentText from '../../components/AccentText/AccentTextComponent';

import styles from './styles';


function RecordsScreen(props) {
  return (
    <Screen style={styles.container}>
        <Title marginTop={20}>My Records</Title>
        <AccentText style={styles.headerRecords}> #         Weight        Height          BMI </AccentText>
    </Screen>
  );
}

export default RecordsScreen;