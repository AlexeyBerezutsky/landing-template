import {business, features, portfolio, jobs, team} from './navigation';
import NavItem from "./NavItem";
import LinkWithAuth from "./LinkWithAuth";

type Props = {
    user: string,
    pathname: string,
    isBig: boolean
}

export function Nav({user, pathname, isBig}: Props) {
    return (
        <nav className="header__navigation">
            <ul className="header__navigation-list">
                <NavItem menuItem={features} />
                <NavItem menuItem={business} />
                <NavItem menuItem={portfolio} />
                <NavItem menuItem={team} />
                <NavItem menuItem={jobs} />
                {!pathname.includes('welcome') && !isBig && (
                    <li className="header__navigation-item">
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
                    </li>
                )}
            </ul>
        </nav>
    );
}
