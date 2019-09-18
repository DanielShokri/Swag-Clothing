import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC653GOJshnVAsQvY7gtt_54XUOtMqqAxY",
    authDomain: "swag-db.firebaseapp.com",
    databaseURL: "https://swag-db.firebaseio.com",
    projectId: "swag-db",
    storageBucket: "",
    messagingSenderId: "907908925837",
    appId: "1:907908925837:web:2171f4d3fcae73493195c4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;