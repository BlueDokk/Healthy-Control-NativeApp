import { types } from "../types/types";
import { startLoading, finishLoading } from "./loading";
import firestoreService from '../firebase/firebaseServices';
import storage from '../utility/storage';

export const lastBmi = (lastWeight, lastHeight, lastBmi) => ({
    type: types.lastBmi,
    payload: {
        lastWeight,
        lastHeight,
        lastBmi
    }
})

export const saveRecord = () => ({
    type: types.saveRecord
})


export const getRecordsFromFirestore = () => {

    return async (dispatch) => {

        
        const { userId } = await storage.getData('user');

        firestoreService.getDataUser(userId)
            .then((doc) => {
                const records = doc.data().records;
                dispatch(updateRecords(records));
                dispatch(finishLoading());
            }).catch((error) => {
                console.log(error);
                dispatch(finishLoading());
            });
    }
}

export const updateRecords = (records) => ({
    type: types.updateRecords,
    payload: {
        records
    }
})