import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBgXMU5GLNMb3NFz8fHQ5XM32LJJD0pctk',
    authDomain: 'crwn-db-e9477.firebaseapp.com',
    databaseURL: 'https://crwn-db-e9477.firebaseio.com',
    projectId: 'crwn-db-e9477',
    storageBucket: 'crwn-db-e9477.appspot.com',
    messagingSenderId: '524224456967',
    appId: '1:524224456967:web:992967d496e7165967fda2',
    measurementId: 'G-YJLMLD7KS0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;