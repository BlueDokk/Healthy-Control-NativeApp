import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthNavigator from './src/navigators/AuthNavigator';
import { store } from './src/store/store';
import AppNavigator from './src/navigators/AppNavigator';
import navigationTheme from './src/navigators/navigationTheme';
import authService from './src/firebase/authServices';


export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {

    authService.currentUser((user)=>{
      if (user?.uid) setUser(user.uid);
    })

  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer >
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
