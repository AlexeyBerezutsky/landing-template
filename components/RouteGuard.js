import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import jwtDecode from '../helpers/jwtDecode';
import { useAuth } from '../hooks/useAuth';

export default function RouteGuard({ children }) {
    const { user, setUser, remove } = useAuth();
    const router = useRouter();
    const [hide, setHide] = useState(true);

    function authCheck(url) {
        const path = url.split(/[#,?]/)[0];
        const protectedPaths = ['/welcome/', '/welcome'];
        const publicPaths = ['/', '/privacy-policy/', '/about/'];

        if (!protectedPaths.includes(path)) {
            if (!publicPaths.includes(path)) {
                return router.push('/');
            }
            return Promise.resolve();
        } else {
            if (!user) {
                const token = url.split('#id_token=')[1];
                if (token) {
                    const decodedToken = jwtDecode(token);
                    setUser(decodedToken);
                    return router.push(path);
                } else {
                    return router.push('/');
                }
            }

            const error = url.split('#error')[1];
            if (error) {
                remove();
                return router.push('/');
            }
        }

        return Promise.resolve();
    }

    const beforeStart = () => {
        setHide(true);
    };

    const afterComplete = (url) => {
        authCheck(url).then(() => {
            setHide(false);
        });
    };

    useEffect(() => {
        authCheck(router.asPath).then(() => {
            setHide(false);
        });

        router.events.on('routeChangeStart', beforeStart);

        router.events.on('routeChangeComplete', afterComplete);

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', beforeStart);
            router.events.off('routeChangeComplete', afterComplete);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return !hide && children;
}
