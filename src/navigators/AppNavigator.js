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



    const [user, setUser] = useState(null);

    const dispatch = useDispatch();

    const getUserFromAsyncStorage = async () => {
        const { userId } = await storage.getData('user');
        setUser(userId);
        console.log(userId);
    }

    const getCurrentUser = () => {

        getUserFromAsyncStorage();

        authService.currentUser((user) => {
            if (user?.uid) {
                storage.storeData('user', { userId: user.uid, displayName: user.displayName, email: user.email });
                dispatch(login(user.uid, user.displayName, user.email));
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