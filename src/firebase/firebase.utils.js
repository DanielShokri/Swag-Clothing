import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


//Firebase config
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


// Firebase Authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Firebase DB

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: title.toLowerCase(),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc;
    }, {})
}

export default firebase;