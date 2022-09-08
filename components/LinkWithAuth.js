import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';

export default function LinkWithAuth({ children }) {
    const { user, setUser, signout } = useAuth();

    // const href = user ? '/welcome' : process.env.NEXT_PUBLIC_AUTH;

    return (
        <Link passHref href={'/welcome'}>
            <div onClick={() => { !user ? setUser({ name: 'Alexey' }) : signout() }}>
                {children}
            </div>
        </Link>
    );
}