import {useEffect, useState} from 'react';

function useScrollTop() {
    const [scrollTopVisible, setVisibility] = useState(false);

    const handleScroll = () => {
        setVisibility(window.scrollY >= parseInt(innerHeight) / 2);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, [handleScroll]);

    return {scrollTopVisible};
}

export default useScrollTop;
