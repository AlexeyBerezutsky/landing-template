import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import useScrolledTo from '../hooks/useScrolledTo';
import useScrollTop from '../hooks/useScrollTop';
import {cloneElement} from 'react';
import {useSmallDevice} from '../hooks/MediaQueries';
import ScrollToTop from './ScrollToTop';

export default function Layout({children}) {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const {reached, element} = useScrolledTo();
    const {scrollTopVisible} = useScrollTop();
    const isSmallDevice = useSmallDevice();

    return (
        <>
            <Header sideMenuOpen={() => setSideMenuOpen(true)} isSticky={reached} />
            {cloneElement(children, {stickyHeaderRef: element})}

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
