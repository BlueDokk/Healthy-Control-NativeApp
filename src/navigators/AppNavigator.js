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
import { finishLoading, startLoading } from '../actions/loading';
import ActivityIndicator from '../components/ActivityIndicator/ActivityIndicatorComponent';


function AppNavigator() {

    const [user, setUser] = useState(null);
    const { loading } = useSelector(state => state.loading);

    const dispatch = useDispatch();

    // If there is a user in the AsyncStorage it is stored in the state.
    const getUserFromAsyncStorage = async () => {
        try {
            const { userId } = await storage.getData('user');
            setUser(userId);
            
        } catch (error) {
            console.log(error);
        }

    }

    // Observer that detects changes in the state of the session.
    const getCurrentUserFromObserver = () => {

        dispatch(startLoading());
        authService.currentUser((user) => {
            if (user?.uid) {
                console.log(user.uid);
                storage.storeData('user', { userId: user.uid, displayName: user.displayName, email: user.email });
                dispatch(login(user.uid, user.displayName, user.email));
                dispatch(getRecordsFromFirestore());
                return setUser(user.uid);
            } else {
                dispatch(finishLoading());
            }
            setUser(null);
        })
    }

    useEffect(() => {
        getUserFromAsyncStorage();
        getCurrentUserFromObserver();
    }, [])

    return (
        <NavigationContainer theme={navigationTheme}>
            <ActivityIndicator visible={loading} />
            {user ? <DashboardNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}



export default AppNavigator;