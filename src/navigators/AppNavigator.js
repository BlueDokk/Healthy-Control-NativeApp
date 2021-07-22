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
import { getRecordsFromFirestore } from '../actions/ui';

function AppNavigator() {

    const [user, setUser] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {

        authService.currentUser((user) => {
            if (user?.uid) {
                const userId = user.uid;

                storage.storeData(userId);
                dispatch(login(userId, user.displayName));
                dispatch(getRecordsFromFirestore(userId));
                return setUser(userId);
            }
            setUser(null);
        })

    }, [dispatch])

    return (
        <NavigationContainer theme={navigationTheme}>
            {user ? <DashboardNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}



export default AppNavigator;