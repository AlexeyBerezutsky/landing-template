
export default function ScrollToTop({scrollTopVisible}: {scrollTopVisible: boolean}) {
    const classNames = ['scroll-top'];

    if (scrollTopVisible) {
        classNames.push('scroll-top--visible');
    }

    function handleClick() {
        // window.scrollTo(top);
    }

    return (
        <a onClick={handleClick} role="button" aria-label="Scroll to top" className={classNames.join(' ')}>
            <img src={'/img/chevron-top.svg'} alt="" height={48} width={48} />
        </a>
    );
}
