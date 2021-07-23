import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Screen from '../../components/ScreenTag/ScreenTagComponent';
import storage from '../../utility/storage';
import ItemProfileComponent from '../../components/ItemProfile/ItemProfileComponent';
import { deleteAccount } from '../../actions/auth';
// import firestoreService from '../../firebase/firebaseServices';

import styles from './styles';
import colors from '../../config/colors';

function ProfileScreen(props) {

  const { username, email } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const handleDeleteAccount = () => {

    dispatch(deleteAccount());

  }

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5
          name='user-alt'
          size={50}
          color={colors.primary}
        />
        <View style={styles.userContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>

      <ItemProfileComponent
        icon='edit'
        label='Edit profile'
        size={25}
        onPress={() => console.log('press')}
      />
      <ItemProfileComponent
        icon='cog'
        label='Settings'
        onPress={() => console.log('press')}
      />
      <ItemProfileComponent
        icon='user-slash'
        label='Delete account'
        size={25}
        onPress={handleDeleteAccount}
      />
    </Screen>
  );
}

export default ProfileScreen;