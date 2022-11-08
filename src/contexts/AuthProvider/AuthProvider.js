import React, { useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { createContext } from 'react';
const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
const [user,setUser]=useState({});
const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const googleSignIn=(provider)=>{
return signInWithPopup(auth,provider)
}
const logOut=()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return ()=>{
unSubscribe()
}    
},[])
const authInfo={user,createUser,logIn,logOut,googleSignIn}
    return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    );
};

export default AuthProvider;