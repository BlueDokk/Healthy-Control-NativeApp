import AsyncStorage from '@react-native-async-storage/async-storage';

import authService from "../firebase/authServices";
import firestoreService from '../firebase/firebaseServices';
import { types } from "../types/types";
import { startLoading, finishLoading } from "./loading";
import { Alert } from 'react-native';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        Alert.alert(error);
    }
}

export const loginWithEmailPassword = (email, password) => {


    return (dispatch) => {

        dispatch(startLoading());

        authService.login(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName))

                dispatch(finishLoading());

                console.log('Successful login');
            }).catch(() => {
                Alert.alert("Error: Invalid email or password.");
                dispatch(finishLoading());
            });

    }
}

export const registerWithEmailPasswordName = (email, password, name) => {

    const dataUser = {
        username: name,
        email,
        records: []
    }


    return (dispatch) => {

        dispatch(startLoading());

        authService.signup(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(login(user.uid, user.displayName))
                storeData('user', user.uid);
                dispatch(finishLoading());

                firestoreService.sendData(dataUser, user.uid);

                console.log('Successful registration')

            }).catch(error => {
                Alert.alert(`${error}`);
                dispatch(finishLoading());
            });;
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const logout = () => ({
    type: types.logout
})

export const startLogout = () => {

    return async (dispatch) => {

        await authService.logOut();
        dispatch(logout());
    }

}

export const deleteAccount = (userId) => {

    return (dispatch) => {
        firestoreService.deleteUser(userId);
        authService.deleteAccount(userId);
        dispatch(logout());
    }

}