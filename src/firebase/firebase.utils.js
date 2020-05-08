import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyCF1z986CWr9CMO0lpN4M1vA5mcDhzMKTo",
  authDomain: "crwn-db-902f3.firebaseapp.com",
  databaseURL: "https://crwn-db-902f3.firebaseio.com",
  projectId: "crwn-db-902f3",
  storageBucket: "crwn-db-902f3.appspot.com",
  messagingSenderId: "702987004054",
  appId: "1:702987004054:web:7da189f19cd2a8219e3ab7",
  measurementId: "G-C8X29GCRMK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log('error creating user', error.message)
    }

  }
  
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
