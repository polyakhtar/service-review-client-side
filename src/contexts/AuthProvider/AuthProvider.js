import React, { useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { createContext } from 'react';
const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
const [user,setUser]=useState({});
const [loading,setLoading]=useState(true);
const createUser=(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}
const logIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const googleSignIn=(provider)=>{
    setLoading(true);
return signInWithPopup(auth,provider)
}
const logOut=()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
unSubscribe()
}    
},[])
const authInfo={user,loading,createUser,logIn,logOut,googleSignIn}
    return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    );
};

export default AuthProvider;