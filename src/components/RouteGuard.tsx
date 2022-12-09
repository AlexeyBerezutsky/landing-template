import { PropsWithChildren, useEffect, useState } from 'react';
import jwtDecode from '../helpers/jwtDecode';
import {sleep} from '../helpers/tools';
import {useAuth} from '../hooks/useAuth';
import { useLocation, useNavigate } from "react-router";

const protectedPaths = ['/welcome/', '/welcome'];
const publicPaths = ['/', '/privacy-policy/', '/about/'];

const routeCheck = (url: string, isLoggein: boolean) => {
    const path = url.split(/[#,?]/)[0];

    if (publicPaths.includes(path) || (protectedPaths.includes(path) && isLoggein)) {
        return path;
    }

    return '/';
};

export function RouteGuard({children}: PropsWithChildren) {
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [hide, setHide] = useState(true);

    const beforeStart = () => {
        setHide(true);
    };

    const afterComplete = async (url: string) => {
        setHide(false);

        const newRoute = routeCheck(url, !!user);
        if (newRoute !== url) {
            navigate(newRoute);
        }
    };

    //TODO: how to make route guard?

    // useEffect(() => {
    //     (async () => {
    //         await afterComplete(location.pathname);
    //     })();
    //
    //     router.events.on('routeChangeStart', beforeStart);
    //
    //     router.events.on('routeChangeComplete', afterComplete);
    //
    //     return () => {
    //         router.events.off('routeChangeStart', beforeStart);
    //         router.events.off('routeChangeComplete', afterComplete);
    //     };
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [user]);

    return children;
}
