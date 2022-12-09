import { useEffect, useState } from 'react';
import { MenuItem } from "./navigation";

export function NavItem({menuItem}: { menuItem: MenuItem }) {
    const [active, setActive] = useState(false);

    function getSectionCoordinates(element: HTMLElement) {
        const sectionStartpoint = Math.floor(element.getBoundingClientRect().y + window.scrollY);
        const sectionEndpoint = Math.floor(sectionStartpoint + element.getBoundingClientRect().height);

        return [sectionStartpoint, sectionEndpoint];
    }

    // scroll callback function which decides what element is currently active depending on current scroll position
    function navHighlighter( element: HTMLElement|null) {
        if(!element) {return;}
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
            window.history.pushState(null, '', menuItem.hash);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    // subscribe to scroll event on component mount, calculating section beggining and end points
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const element = document.getElementById(menuItem.id);
        const tmp = ()=>navHighlighter(element);
        if (element) {
            window.addEventListener('scroll', tmp);
        }
        return () => {
            window.removeEventListener('scroll', tmp);
        };
    }, []);

    useEffect(() => {
        const currentPathname = window.location.pathname;
        const root = '/';
        if (currentPathname === root) {
            const hash = window.location.hash;
            if (hash && hash.includes(menuItem.id)) {
                const element = document.querySelector('#' + menuItem.id);
                element?.scrollIntoView({behavior: 'smooth'});
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <li className={`header__navigation-item ${active ? 'header__navigation-item--active' : ''}`}>
            <a href={menuItem.url} className="header__navigation-link">{menuItem.title}</a>
        </li>
    );
}