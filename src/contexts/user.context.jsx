import { useState, createContext, useEffect } from "react";

import { onAuthStateChangedHandler, createUserDocFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHandler((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        } )

        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}