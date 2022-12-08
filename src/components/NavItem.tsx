import React, {useEffect, useState} from 'react';
import Link from 'next/link';

function NavItem({menuItem}) {
    const [active, setActive] = useState();
    let element;

    function getSectionCoordinates(element) {
        const sectionStartpoint = Math.floor(element.getBoundingClientRect().y + window.scrollY);
        const sectionEndpoint = Math.floor(sectionStartpoint + element.getBoundingClientRect().height);

        return [sectionStartpoint, sectionEndpoint];
    }

    // scroll callback function which decides what element is currently active depending on current scroll position
    function navHighlighter() {
        const [sectionStartpoint, sectionEndpoint] = getSectionCoordinates(element);
        //Get current scroll position
        let currentPosition = Math.ceil(window.scrollY);
        if (currentPosition >= sectionStartpoint && currentPosition < sectionEndpoint) {
            setActive(true);
        } else {
            setActive(false);
        }
    }

    //subscribe to each change of active state to replace current url hash
    // window.history.pushState  is used to prevent unnecessary page scrolling to anchor
    useEffect(() => {
        if (active) {
            window.history.pushState(null, null, menuItem.hash);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    // subscribe to scroll event on component mount, calculating section beggining and end points
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        element = document.getElementById(menuItem.id);
        if (element) {
            window.addEventListener('scroll', navHighlighter);
        }
        return () => {
            window.removeEventListener('scroll', navHighlighter);
        };
    }, []);

    useEffect(() => {
        const currentPathname = window.location.pathname;
        const root = '/';
        if (currentPathname === root) {
            const hash = window.location.hash;
            if (hash && hash.includes(menuItem.id)) {
                document.querySelector('#' + menuItem.id).scrollIntoView({behavior: 'smooth'});
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <li className={`header__navigation-item ${active ? 'header__navigation-item--active' : ''}`}>
            <Link passHref href={menuItem.url}>
                <a className="header__navigation-link">{menuItem.title}</a>
            </Link>
        </li>
    );
}

export default NavItem;
