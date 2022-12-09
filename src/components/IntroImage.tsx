import {useBigDevice} from '../hooks/MediaQueries';

const big = 'https://via.placeholder.com/2000x800.png'; //require(`${process.env.NEXT_PUBLIC_BASE_PATH}/img/intro.png/?resize&sizes[]=1200`);
const mobile = 'https://via.placeholder.com/2000x800.png'; //require(`${process.env.NEXT_PUBLIC_BASE_PATH}/img/intro-mobile.png?resize&sizes[]=900`);

export function IntroImage() {
    const isBig = useBigDevice();

    return (
        <picture>
            {/* <source srcSet={isBig ? big.srcSet : mobile.srcSet} sizes="928px" media="(min-width: 992px)" /> */}
            <img src={isBig ? big : mobile} className="intro__image" alt="" width={2000} height={800} />
        </picture>
    );
}
