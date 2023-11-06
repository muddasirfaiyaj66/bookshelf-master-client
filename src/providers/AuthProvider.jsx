import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleUpdateProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = ()=> {
        return signOut(auth)

    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setIsLoading(false);
        })
        return ()=>{
           return unsubscribe();
        }
    },[])
    const authInfo ={
        user,isLoading, createUser, handleUpdateProfile, logOut, login , signInWithGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;