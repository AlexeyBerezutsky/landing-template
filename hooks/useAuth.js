import React, {useContext, createContext} from 'react';
import useLocalStorage from './useLocalStorage';

const userKey = 'user';

const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser, remove] = useLocalStorage(userKey, null);

    const signout = () => {
        return remove();
    };

    return {
        user,
        setUser,
        remove,
        signout
    };
}
