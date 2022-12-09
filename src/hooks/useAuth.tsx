import React, { createContext, PropsWithChildren, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

const userKey = 'user';

type Auth = {
    user: string,
    setUser: (name: string) => void,
    remove: () => void,
    signout: () => void
} | {};

const authContext = createContext<Auth>({});

export function ProvideAuth({children}: PropsWithChildren) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext<Auth>(authContext);
};

function useProvideAuth(): Auth {
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