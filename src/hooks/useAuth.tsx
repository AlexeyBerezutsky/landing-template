import React, { createContext, PropsWithChildren, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

const userKey = 'user';

const noop = () => {
};
type Auth = {
    user: {name: string},
    setUser: (name: string) => void,
    remove: () => void,
    signout: () => void
};

const authContext = createContext<Auth>({
    user: {name: ""},
    setUser: noop,
    remove: noop,
    signout: noop,
});

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