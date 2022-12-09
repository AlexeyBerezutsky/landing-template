import {useCallback, useEffect, useState} from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const initialize = (key: string) => {
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
        (value: T) => {
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
