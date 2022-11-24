import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    // 01.createUserWithEmailAndPassword
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 02.signInWithEmailAndPassword
    const signInLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 03. signInWithGoogle
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // 05.updateUser
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    // 04.LogOut user
    const logOut = () => {
        return signOut(auth);
    }


    // 03.using after login and sign in page complete for current Observer Firebase>Manage Users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user finding..');
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        createUser,
        signInLogIn,
        googleSignIn,
        updateUser,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;