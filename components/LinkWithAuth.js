import {useAuth} from '../hooks/useAuth';
import Link from 'next/link';

export default function LinkWithAuth({children}) {
    const {user} = useAuth();

    const href = user ? '/welcome' : process.env.NEXT_PUBLIC_AUTH;

    return (
        <Link passHref href={href}>
            {children}
        </Link>
    );
}
