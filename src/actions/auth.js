import AsyncStorage from '@react-native-async-storage/async-storage';

import { types } from "../types/types";
import authService from "../firebase/authServices";
import { startLoading, finishLoading } from "./loading";

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
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
            }).catch(error => {
                console.log(`Error: ${error}`);
                dispatch(finishLoading());
            });

    }
}

export const registerWithEmailPasswordName = (email, password, name) => {


    return (dispatch) => {

        dispatch(startLoading());

        authService.signup(email, password)
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(login(user.uid, user.displayName))
                storeData('user', user.uid);
                dispatch(finishLoading());

                console.log('Successful registration')

            }).catch(error => {
                console.log(`Error: ${error}`);
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

        authService.deleteAccount(userId);
        dispatch(logout());
    }

}