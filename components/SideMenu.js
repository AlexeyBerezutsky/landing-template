import Nav from './Nav';
import {useRouter} from 'next/router';
import {useAuth} from '../hooks/useAuth';
import {useBigDevice} from '../hooks/MediaQueries';
import Image from 'next/image';

export default function SideMenu({close}) {
    const {pathname} = useRouter();
    const {user} = useAuth();
    const isBig = useBigDevice();

    return (
        <div onClick={close} className="side-menu">
            <button className="menu-toggle menu-toggle--close">
                <Image src="/img/x-mark-thin.svg" height={24} width={24} alt="close-button" />
            </button>
            <Nav user={user} pathname={pathname} isBig={isBig} />
        </div>
    );
}
