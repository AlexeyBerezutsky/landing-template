import React from 'react';
import LinkWithAuth from './LinkWithAuth';
import StaticImage from './StaticImage';

function Features({ stickyHeaderRef, className, id }) {
    return (
        <section ref={stickyHeaderRef} className={className} id={id}>
            <div className="container-fluid features__container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="features__heading">#PhasellusMaximus</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-4">
                        <div className="features__list-item features__list-item--notebooks wow appear-on-scroll">
                            <div className="features__icon" />
                            <h3 className="features__title">Vestibulum</h3>
                            <p className="features__text">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Curabitur sollicitudin purus ut ornare finibus.
                                Aliquam quis rhoncus odio. Phasellus vehicula magna quam, nec egestas quam venenatis eu.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="features__list-item features__list-item--community wow appear-on-scroll">
                            <div className="features__icon" />
                            <h3 className="features__title">Curabitur</h3>
                            <p className="features__text">
                                Suspendisse viverra nunc eu accumsan pretium. Donec commodo metus sed dapibus porta.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="features__list-item features__list-item--collaborate wow appear-on-scroll">
                            <div className="features__icon" />
                            <h3 className="features__title">Donec</h3>
                            <p className="features__text">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sollicitudin purus ut ornare finibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pros">
                <div className="container-fluid pros__container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-sm-6">
                            <div className="pros__item d-flex justify-content-center justify-content-lg-start">
                                <h2 className="pros__title">Nullam dolor libero, luctus a blandit vehicula, mattis nec ipsum.</h2>

                                <p className="pros__text">
                                    Fusce vel mollis nunc, ac faucibus mi. Nunc turpis tortor, congue eu finibus eu, ultricies ac diam.
                                </p>

                                <LinkWithAuth>
                                    <a className="pros__button action-button action-button__join">
                                        Nunc sodales
                                    </a>
                                </LinkWithAuth>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-sm-6 d-flex justify-content-center justify-content-lg-end">
                            <img
                                className="pros__image"
                                src="https://via.placeholder.com/449x336.png"
                                alt="illustration"
                                width={449}
                                height={336}
                            />
                        </div>
                    </div>
                    <div className="row pros__row">
                        <div className="col-12 col-sm-6 col-lg-6 order-lg-1">
                            <div className="pros__inner">
                                <div className="pros__item d-flex justify-content-center justify-content-lg-start">
                                    <h2 className="pros__title">
                                        Maecenas non viverra odio. Vestibulum aliquet tellus dui, at vulputate erat ornare
                                    </h2>
                                    <p className="pros__text">
                                        Phasellus maximus id turpis quis hendrerit.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                        Suspendisse sed leo porttitor leo imperdiet sollicitudin.
                                    </p>

                                    <LinkWithAuth>
                                        <a className="pros__button action-button action-button__join">
                                            Mauris bibendum
                                        </a>
                                    </LinkWithAuth>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 d-flex d-lg-flex justify-content-center justify-content-lg-start">
                            <img
                                className="pros__image"
                                src="https://via.placeholder.com/448x364.png"
                                alt="illustration"
                                width={448}
                                height={364}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
