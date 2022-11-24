import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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



    const authInfo = {
        user,
        createUser,
        signInLogIn
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