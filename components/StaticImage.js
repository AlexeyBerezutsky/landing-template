import PropTypes from 'prop-types';

export default function StaticImage(props) {
    const src = require(process.env.NEXT_PUBLIC_BASE_PATH + props.src);
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} src={src} alt={props.alt} />;
}

StaticImage.prototype = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};
