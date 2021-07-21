import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';
import AuthNavigator from './AuthNavigator';
import authService from '../firebase/authServices';
import storage from '../utility/storage';
import ActivityIndicator from '../components/ActivityIndicator/ActivityIndicatorComponent';
import {login} from '../actions/auth';
import navigationTheme from './navigationTheme';

function AppNavigator() {

    const [user, setUser] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {

        authService.currentUser((user) => {
            if (user?.uid) {

                storage.storeData(user.uid);
                dispatch(login(user.uid, user.displayName));
                return setUser(user.uid);
            }
            setUser(null);
        })

    }, [])

    return (
        <NavigationContainer theme={navigationTheme}>
            {user ? <DashboardNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}



export default AppNavigator;