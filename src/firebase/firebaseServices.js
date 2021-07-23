import { db } from './firebase-config';
import 'firebase/firestore';
import { Alert } from 'react-native';

const firestoreService = {

    sendData(data, id) {

        db.collection("users").doc(id).set({ ...data })
            .catch((error) => {
                Alert.alert("Error adding user: ", error);
            });
    },

    saveRecord(records, id) {

        db.collection("users").doc(id)
            .update({
                records
            })
            .catch(error => {
                Alert.alert("Error saving record: ", error);
            })
    },

    getDataUser(userId) {

        return db.collection("users").doc(userId)
            .get()

    },

    async getRecords(userId) {

        const records = await db.collection("users").doc(userId)
            .get();

        return records;
    },

    deleteUser(userId) {
        return db.collection("users").doc(userId).delete();
    }
}

export default firestoreService;