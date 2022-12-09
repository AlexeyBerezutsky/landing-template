import {useAuth} from '../hooks/useAuth';
import { PropsWithChildren } from "react";

export default function LinkWithAuth({children}: PropsWithChildren) {
    const {user, setUser, signout} = useAuth();

    // const href = user ? '/welcome' : process.env.NEXT_PUBLIC_AUTH;

    return (
        <a href={'/welcome'}>
            <div
                onClick={() => {
                    !user ? setUser('Alexey') : signout();
                }}
            >
                {children}
            </div>
        </a>
    );
}
