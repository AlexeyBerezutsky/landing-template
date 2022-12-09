import React from 'react';

export function Cite({className}: Element) {
    return (
        <section className={className}>
            <div className="container-fluid cite__container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-8 col-12 col-lg-8 d-flex justify-content-center">
                        <div className="cite-inner">
                            <p className="cite__text">
                                Mauris bibendum lacus a commodo congue. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Curabitur sollicitudin purus ut ornare finibus. Aliquam quis rhoncus odio.
                                Phasellus vehicula magna quam, nec egestas quam venenatis eu. Phasellus luctus accumsan
                                justo, vel luctus est sodales eu. Praesent ut viverra sem, ut ultricies tortor. Sed
                                vitae pellentesque ipsum. Donec sed congue nunc.
                            </p>
                            <div className="cite__author-container">
                                <div className="cite__author-info">
                                    <p className="cite__name">Nunc Turpis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
