import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import jwtDecode from '../helpers/jwtDecode';
import {sleep} from '../helpers/tools';
import {useAuth} from '../hooks/useAuth';

const protectedPaths = ['/welcome/', '/welcome'];
const publicPaths = ['/', '/privacy-policy/', '/about/'];

const routeCheck = (url, isLoggein) => {
    const path = url.split(/[#,?]/)[0];

    if (publicPaths.includes(path) || (protectedPaths.includes(path) && isLoggein)) {
        return path;
    }

    return '/';
};

export default function RouteGuard({children}) {
    const {user} = useAuth();
    const router = useRouter();
    const [hide, setHide] = useState(true);

    const beforeStart = () => {
        setHide(true);
    };

    const afterComplete = async (url) => {
        setHide(false);

        const newRoute = routeCheck(url, !!user);
        if (newRoute !== url) {
            router.push(newRoute);
        }
    };

    useEffect(() => {
        (async () => {
            await afterComplete(router.asPath);
        })();

        router.events.on('routeChangeStart', beforeStart);

        router.events.on('routeChangeComplete', afterComplete);

        return () => {
            router.events.off('routeChangeStart', beforeStart);
            router.events.off('routeChangeComplete', afterComplete);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return !hide && children;
}
