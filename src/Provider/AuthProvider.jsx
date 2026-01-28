import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    // console.log(user)

    //login and registration  with email & password

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser,updateData);
    }

    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth,googleProvider)
    }


    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        googleSignIn,
        logOut,
        logIn,
        loader,
        setLoader,
        updateUser
    }

    return <AuthContext.Provider value={authData} >{children}</AuthContext.Provider>;
};

export default AuthProvider;