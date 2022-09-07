import React from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';

function Careers({ className, id }) {
    return (
        <section className={className} id={id}>
            <div className="container-fluid jobs__container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <img
                            src="https://via.placeholder.com/291x320.png"
                            alt="logo image"
                            className="jobs-image"
                            width={291}
                            height={320}
                        />
                    </div>

                    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
                        <h2 className="jobs__title">Phasellus maximus id turpis quis hendrerit?</h2>
                        <p className="jobs__text">
                            {`Fusce vel mollis nunc, ac faucibus mi. Nunc turpis tortor, congue eu finibus eu, 
                            ultricies ac diam. Aenean laoreet, ex eget bibendum bibendum, sem leo dapibus odio, 
                            at semper mi lacus ut urna. In fermentum purus in mollis facilisis. 
                            Sed eget orci ullamcorper felis molestie tristique. 
                            Maecenas commodo nisl ac neque scelerisque, 
                            sit amet dignissim nisi hendrerit. 
                            Proin eget dictum augue, eget ornare neque.`}
                        </p>
                        <Link passHref href="">
                            <a className="jobs__button action-button">careers</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Careers;
