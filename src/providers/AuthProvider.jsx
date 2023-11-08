import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const axios = useAxios();

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
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
            setUser(currentUser);
            setIsLoading(false);
            if (currentUser) {
                axios.post('/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log('token response', res.data);
                    })
                    axios.post('/user', loggedUser)
                    .then(res => {
                        // console.log('token response', res.data);
                    })
            }
            else {
                axios.post('/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        // console.log(res.data);
                    })
            }
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