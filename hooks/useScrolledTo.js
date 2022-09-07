import {useEffect, useState, useRef} from 'react';

function useScrolledTo() {
    const [reached, setReached] = useState(false);
    const element = useRef(null);

    const handleScroll = () => {
        if (element.current) {
            setReached(Math.ceil(window.scrollY) >= Math.floor(element.current.offsetTop));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, [handleScroll]);

    return {reached, element};
}

export default useScrolledTo;
