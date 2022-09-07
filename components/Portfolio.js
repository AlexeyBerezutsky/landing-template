import React from 'react';
import StaticImage from './StaticImage';

function Portfolio({ className, id }) {
    return (
        <section className={className} id={id}>
            <div className="container-fluid portfolio__container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="portfolio__title">Portfolio</h2>
                        <ul className="portfolio__list">
                            <li className="portfolio__item">
                                <img
                                    className="portfolio__image"
                                    src="https://via.placeholder.com/448x300.png"
                                    alt="Aliquam picture"
                                    width={448}
                                    height={300}
                                />
                                <h3 className="portfolio__item-title">Aliquam</h3>
                                <p className="portfolio__text-strong">Curabitur enim urna</p>
                                <p className="portfolio__text">
                                    Pellentesque sodales blandit eros. Aliquam posuere mi odio, vel porttitor odio molestie vel. Proin eleifend justo quis mauris efficitur cursus.
                                    Nullam at tempus sem, vel pretium nisi. Curabitur enim urna, facilisis vel egestas sit amet, pretium ut enim. Curabitur dictum nisi in urna vulputate dictum.
                                    Nullam ut ex malesuada, rutrum odio vitae,
                                    convallis ante. Nulla facilisi. Donec diam arcu, varius vitae feugiat vitae, tristique et odio. Ut hendrerit est eget semper tempus.
                                </p>
                            </li>

                            <li className="portfolio__item">
                                <img
                                    className="portfolio__image"
                                    src="https://via.placeholder.com/448x300.png"
                                    alt="Bam picture"
                                    width={448}
                                    height={300}
                                />
                                <h3 className="portfolio__item-title">Bam congue libero massa</h3>
                                <p className="portfolio__text-strong">Sed pretium viverra augue ac laoreet</p>
                                <p className="portfolio__text">
                                    Donec a placerat purus. Nunc eu velit at orci gravida ullamcorper nec consectetur nisl. Nam eu molestie est, quis sagittis turpis.
                                    Suspendisse condimentum, massa eu convallis vulputate, metus erat consequat turpis, eget cursus lorem ipsum vitae lectus.
                                    Fusce consectetur velit nunc, eu congue mauris molestie sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor ipsum at diam tincidunt auctor.
                                    Nunc justo nulla, tincidunt eu ullamcorper a, eleifend ac sem. Morbi id dui augue.
                                </p>
                            </li>

                            <li className="portfolio__item">
                                <img
                                    className="portfolio__image"
                                    src="https://via.placeholder.com/448x300.png"
                                    alt="Bam picture"
                                    width={448}
                                    height={300}
                                />
                                <h3 className="portfolio__item-title">Aliquam in quam nulla</h3>
                                <p className="portfolio__text-strong">
                                    Vestibulum et rhoncus diam, eu mollis nunc
                                </p>
                                <p className="portfolio__text">
                                    Phasellus auctor sem a felis pretium, et malesuada felis dignissim. In eu leo pulvinar, tempor odio a, dignissim ligula
                                </p>
                            </li>

                            <li className="portfolio__item">
                                <img
                                    className="portfolio__image"
                                    src="https://via.placeholder.com/448x300.png"
                                    alt="libero picture"
                                    width={448}
                                    height={300}
                                />
                                <h3 className="portfolio__item-title">libero</h3>
                                <p className="portfolio__text-strong">Next libero</p>
                                <p className="portfolio__text">
                                    In ullamcorper venenatis libero, at faucibus arcu lacinia et. Proin porta vel felis et facilisis. Nulla blandit elementum nisl.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
