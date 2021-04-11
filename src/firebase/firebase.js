import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDTdWFjfrotC-um8p24T-HnBMl4DJQijNs",
  authDomain: "audblidate.firebaseapp.com",
  projectId: "audblidate",
  storageBucket: "audblidate.appspot.com",
  messagingSenderId: "171594676204",
  appId: "1:171594676204:web:d42e570834f7d8b65a72c9",
  measurementId: "G-TT8ST2457C"
};

// write function to store newly authenticated users to db

export const checkIfUserExists = async (authUser) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    return false;
  } else {
    return userRef;
  }
};

export const createUserDocument = async (authUser, extraData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await userRef
        .set({
          displayName,
          email,
          createdAt,
          ...extraData,
        })
        .then(() => {
          window.location = "/";
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
