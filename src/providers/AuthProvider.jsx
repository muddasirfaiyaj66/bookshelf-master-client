import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
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
        user,isLoading
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;