import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import authService from "../firebase/authServices";
import firestoreService from '../firebase/firebaseServices';
import { types } from "../types/types";
import { startLoading, finishLoading } from "./loading";
import storage from '../utility/storage';
import { updateRecords } from './ui';


export const loginWithEmailPassword = (email, password) => {

    return (dispatch) => {

        dispatch(startLoading());

        authService.login(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email));
                storage.storeData('user', { userId: user.uid, displayName: user.displayName, email: user.email });
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

                firestoreService.sendData(dataUser, user.uid);
                await user.updateProfile({ displayName: name });

                dispatch(login(user.uid, user.displayName, user.email));
                dispatch(finishLoading());

                console.log('Successful registration')

            }).catch(error => {
                Alert.alert(`${error}`);
                dispatch(finishLoading());
            });;
    }
}


export const login = (uid, displayName, email) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
        email
    }
})


export const logout = () => ({
    type: types.logout
})

export const startLogout = () => {

    return async (dispatch) => {

        AsyncStorage.clear()
            .then(async () => {
                await authService.logOut();
                dispatch(logout());
            }).catch((error) => {
                Alert.alert(`${error}`);
            })
    }

}

export const deleteAccount = () => {

    return async (dispatch) => {

        const { userId } = await storage.getData('user');

        firestoreService.deleteUser(userId).then(() => {
            Alert.alert("Your account has been successfully deleted");
            dispatch(updateRecords([]))
            dispatch(startLogout());
            authService.deleteAccount(userId);
        }).catch((error) => {
            Alert.alert("Error deleting account: ", error);
        });;
    }
}