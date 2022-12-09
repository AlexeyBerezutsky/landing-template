import {useAuth} from '../hooks/useAuth';
import {useBigDevice} from '../hooks/MediaQueries';
import { useLocation } from "react-router";
import { Nav } from "./Nav";

type Props = {onClose: ()=>void};

export default function SideMenu({onClose}:  Props) {
    const {pathname} = useLocation();
    const {user} = useAuth();
    const isBig = useBigDevice();

    return (
        <div onClick={onClose} className="side-menu">
            <button className="menu-toggle menu-toggle--close">
                <img src="/img/x-mark-thin.svg" height={24} width={24} alt="close-button" />
            </button>
            <Nav user={user} pathname={pathname} isBig={isBig} />
        </div>
    );
}
