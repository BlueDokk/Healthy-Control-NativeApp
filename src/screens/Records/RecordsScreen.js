import React from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView } from 'react-native';

import Title from '../../components/Title/TitleComponent';
import RecordTableComponent from '../../components/RecordTable/RecordTableComponent';

import styles from './styles';

function RecordsScreen() {

  const { records } = useSelector(state => state.ui)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title marginTop={20}>My Records</Title>
        <RecordTableComponent records={records} />
      </View>
    </ScrollView>
  );
}

export default RecordsScreen;