import { firebase } from './firebase-config';
import 'firebase/auth';

const authService = {

    currentUser(callback) {

        return firebase.auth().onAuthStateChanged(callback);
    },

    logOut() {
        return firebase.auth().signOut();
    },

    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },

    signup(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },

    deleteAccount() {
        const user = firebase.auth().currentUser;

        user.delete().then(function () {
            console.log("Your account has been successfully deleted");
        }).catch(function (error) {
            console.log("Error deleting account: ", error);
        });
    }

}

export default authService;