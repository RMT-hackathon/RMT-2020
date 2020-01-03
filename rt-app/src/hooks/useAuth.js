import React, { useContext, createContext, useState, useEffect } from 'react';
import firebase from 'firebase';

export const authContext = createContext({})
export const useSession = () => useContext(authContext)

export default function AuthWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true)
    const [auth, setAuth] = useState(null)
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(auth => {
            setAuth(auth)
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (auth) {
            const unsubscribe = firebase.firestore().collection("users").doc(auth.uid).onSnapshot(snap => {
                const data = snap.data()
                setProfile(data)
                console.log("data", data)
            })
            return () => unsubscribe()
        }
    }, [auth])

    return (
        <authContext.Provider value={{
            isLoading,
            auth,
            profile
        }}>
            {children}
        </authContext.Provider>
    )
}
