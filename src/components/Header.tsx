import Nav from './Nav';
import LinkWithAuth from './LinkWithAuth';
import {useAuth} from '../hooks/useAuth';
import {useBigDevice} from '../hooks/MediaQueries';
import { useLocation } from "react-router";

type Props = {
    isSticky: boolean;
    onSideMenuOpen: ()=>void;
}

export default function Header({isSticky, onSideMenuOpen}: Props) {
    const {pathname} = useLocation();
    const {user} = useAuth();
    const isBig = useBigDevice();

    const classNames = ['header'];
    if (isSticky) {
        classNames.push('header-sticky');
    }

    if (pathname !== '/') {
        classNames.push('header-inner-page');
    }

    return (
        <header className={classNames.join(' ')}>
            <div className="container-fluid header__container">
                <div className="row">
                    <div className="col-12 col-lg-2 d-flex justify-content-between align-items-center">
                            <a href="/" className="header__link-top">
                                <img className="header__logo" src="/logo.png" alt="logo" height={32} width={32} />
                            </a>
                        <button onClick={onSideMenuOpen} className="header__menu menu-toggle">
                            <img
                                src="/img/burger-button.svg"
                                className="menu-toggle__image"
                                height={24}
                                width={24}
                                alt="menu-button"
                            />
                        </button>
                    </div>
                    <div className="col-12 col-lg-8 justify-content-end">
                        <Nav user={user} pathname={pathname} isBig={isBig} />
                    </div>
                    <div className="col-lg-2 header__side-navigation">
                        {!pathname.includes('welcome') && (
                            <LinkWithAuth>
                                {user ? (
                                    <a className="community-button action-button">
                                        <span className="action-button__text">Community</span>
                                    </a>
                                ) : (
                                    <a className="login-button action-button">
                                        <span className="action-button__text">log in</span>
                                    </a>
                                )}
                            </LinkWithAuth>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
