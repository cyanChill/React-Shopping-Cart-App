import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import React, { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "../components/FormElements/Button";

/* Firebase Stuff */
firebase.initializeApp({
  apiKey: "AIzaSyCNTqqi0LpjoE4ncpLokHdixCR96wXXJBw",
  authDomain: "the-odin-project-31cd8.firebaseapp.com",
  projectId: "the-odin-project-31cd8",
  storageBucket: "the-odin-project-31cd8.appspot.com",
  messagingSenderId: "399134823311",
  appId: "1:399134823311:web:9278f1813af4b6e199b1fa",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

/* Context Stuff */
const FirebaseContext = React.createContext();

const FirebaseContextProvider = (props) => {
  const [user] = useAuthState(auth);

  /* Authentication */
  const signIn = useCallback(() => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
  }, []);

  const signOut = useCallback(() => {
    return (
      auth.currentUser && (
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
      )
    );
  }, []);

  const providerValues = {
    user,
    isLoggedIn: !!user,
    signIn,
    signOut,
    auth,
    firestore,
  };

  return (
    <FirebaseContext.Provider value={providerValues}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
export { FirebaseContext };
