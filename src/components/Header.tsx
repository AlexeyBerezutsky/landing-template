import Link from 'next/link';
import Nav from './Nav';
import LinkWithAuth from './LinkWithAuth';
import {useRouter} from 'next/router';
import {useAuth} from '../hooks/useAuth';
import {useBigDevice} from '../hooks/MediaQueries';
import Image from 'next/image';

export default function Header({isSticky, sideMenuOpen}) {
    const {pathname} = useRouter();
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
                        <Link passHref href="/" className="header__link-top">
                            <a>
                                <Image className="header__logo" src="/logo.png" alt="logo" height={32} width={32} />
                            </a>
                        </Link>
                        <button onClick={sideMenuOpen} className="header__menu menu-toggle">
                            <Image
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
