import Image from 'next/image';

export default function ScrollToTop({scrollTopVisible}) {
    const classNames = ['scroll-top'];

    if (scrollTopVisible) {
        classNames.push('scroll-top--visible');
    }

    function handleClick() {
        window.scrollTo(top);
    }

    return (
        <a onClick={handleClick} role="button" aria-label="Scroll to top" className={classNames.join(' ')}>
            <Image src={'/img/chevron-top.svg'} alt="" height={48} width={48} />
        </a>
    );
}
