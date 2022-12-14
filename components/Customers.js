import Image from 'next/image';
import React from 'react';

function Customers({className}) {
    return (
        <section className={className}>
            <div className="container-fluid customers__container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="customers__heading">Customers</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="customers__list">
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>

                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                            <li className="customers__item">
                                <Image
                                    src="https://via.placeholder.com/128x36.png"
                                    alt="customer-logo"
                                    width={128}
                                    height={36}
                                    className="customers__img"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customers;
