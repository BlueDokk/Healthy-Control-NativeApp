import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import DashboardNavigator from './DashboardNavigator';
import AuthNavigator from './AuthNavigator';
import authService from '../firebase/authServices';
import storage from '../utility/storage';
import { login } from '../actions/auth';
import navigationTheme from './navigationTheme';
import { getRecordsFromFirestore } from '../actions/ui';

function AppNavigator() {


    const userId = storage.getData('user');
    const [user, setUser] = useState(userId || null);

    const dispatch = useDispatch();

    const getCurrentUser = () => {
        authService.currentUser((user) => {
            if (user?.uid) {
                storage.storeData('user', { userId: user.uid, displayName: user.displayName, email: user.email });
                dispatch(login(user.uid, user.displayName));
                dispatch(getRecordsFromFirestore());
                return setUser(user.uid);
            }
            setUser(null);
        })
    }

    useEffect(() => {
        getCurrentUser();
    }, [])

    return (
            <NavigationContainer theme={navigationTheme}>
                {user ? <DashboardNavigator /> : <AuthNavigator />}
            </NavigationContainer>
    );
}



export default AppNavigator;