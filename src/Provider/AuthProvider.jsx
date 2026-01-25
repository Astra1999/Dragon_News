import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    // console.log(user)


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser,updateData);
    }

    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
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
        logOut,
        logIn,
        loader,
        setLoader,
        updateUser
    }

    return <AuthContext value={authData} >{children}</AuthContext>;
};

export default AuthProvider;