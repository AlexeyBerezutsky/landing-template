import Image from 'next/image';
import Link from 'next/link';
import {useAuth} from '../hooks/useAuth';
import LinkWithAuth from './LinkWithAuth';

export default function Footer() {
    const {user} = useAuth();

    return (
        //TODO: footer height is depens on 'get-started' height. Is it possible to remove the dependency?
        <footer className={`footer ${user ? 'footer-inner-page' : ''}`}>
            {!user && (
                <section className="get-started">
                    <div className="container-fluid get-started__container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h2 className="get-started__title">Maecenas commodo nisl ac neque scelerisque?</h2>
                            </div>
                            <div className="col-12 col-lg-6 d-flex justify-content-center">
                                <LinkWithAuth>
                                    <a className="get-started__button action-button action-button__join">
                                        Phasellus id
                                    </a>
                                </LinkWithAuth>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className="container-fluid footer__container">
                <div className="row footer__top-row">
                    <div className="col-sm-12 col-lg-3">
                        <Image className="footer__logo" src="/logo.png" alt="logo" width={64} height={64} />
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <nav className="footer__navigation">
                            <ul className="footer__navigation-list">
                                <li className="footer__navigation-item footer__navigation-item--active">
                                    <Link passHref href="/privacy-policy">
                                        <a className="footer__navigation-link">Privacy policy</a>
                                    </Link>
                                </li>
                                <li className="footer__navigation-item">
                                    <Link passHref href="/about">
                                        <a className="footer__navigation-link">about</a>
                                    </Link>
                                </li>
                                <li className="footer__navigation-item">
                                    <Link passHref href="">
                                        <a className="footer__navigation-link">Careers</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        <address className="address">
                            Nunc sodales ullamcorper 1 1001 Lectus
                            <span className="address__divider"> / </span>
                            <Link passHref href="mailto:test@test.com">
                                <a className="address__mail">test@test.com</a>
                            </Link>
                        </address>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <ul className="socials">
                            <li className="socials__item">
                                <Link passHref href="https://linkedin.com/company/test">
                                    <a className="socials__link">
                                        <Image src="/img/linkedin.svg" alt="linkedin" height={24} width={24} />
                                    </a>
                                </Link>
                            </li>
                            <li className="socials__item">
                                <Link passHref href="https://twitter.com/test?lang=en">
                                    <a className="socials__link">
                                        <Image src="/img/twitter.svg" alt="twitter" height={24} width={24} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
