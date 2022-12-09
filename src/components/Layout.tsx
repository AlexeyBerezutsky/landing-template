import { PropsWithChildren, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import useScrolledTo from '../hooks/useScrolledTo';
import useScrollTop from '../hooks/useScrollTop';
import {useSmallDevice} from '../hooks/MediaQueries';
import ScrollToTop from './ScrollToTop';

export default function Layout({children}: PropsWithChildren) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    //todo this should be a context
    const {reached, element} = useScrolledTo();
    const {scrollTopVisible} = useScrollTop();
    const isSmallDevice = useSmallDevice();

    return (
        <>
            <Header onSideMenuOpen={() => setSideMenuOpen(true)} isSticky={reached} />
            {children}


            {/*TODO: does this ref really do what it suppose to do?*/}
            <ScrollToTop scrollTopVisible={scrollTopVisible} />

            <Footer />
            {isSmallDevice && sideMenuOpen && (
                <SideMenu
                    close={() => {
                        setSideMenuOpen(false);
                    }}
                />
            )}
        </>
    );
}
