import {useCallback, useEffect, useState} from 'react';

export default function useLocalStorage(key, initialValue) {
    const initialize = (key) => {
        try {
            const item = localStorage.getItem(key);
            if (item && item !== 'undefined') {
                return JSON.parse(item);
            }

            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        } catch {
            return initialValue;
        }
    };

    const [state, setState] = useState(initialize(key));

    const setValue = useCallback(
        (value) => {
            try {
                setState(value);
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(error);
            }
        },
        [key, setState]
    );

    const remove = useCallback(() => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(error);
        }
    }, [key]);

    return [state, setValue, remove];
}
