import { createContext, useState, useEffect, useContext } from 'react'
import { getCurrentUser } from '../lib/appwrite';

const GlobalContext = createContext();

export const useGlobalContext = () => {
    useContext(GlobalContext);
}

const GlobalProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // state to check if user is logged in
    const [user, setUser] = useState(null); // state to store user data
    const [isLoading, setIsLoading] = useState(true); // state to check if data is loading

    useEffect(() => {
        getCurrentUse
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true);
                    setUser(res);

                } else {
                    setIsLoggedIn(false);
                    setUser(null);

                }
            })
            .catch((error) => {
                console.log(error); // handle error

            })
            .finally(() => {
                setIsLoading(false); // set loading state to false
            });
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading

            }}>
            {children}
        </GlobalContext.Provider>
    )
}