import React from 'react';
import IntroImage from './IntroImage';

function Intro({className}) {
    return (
        <section className={className}>
            <div className="intro__filter-layer intro__filter-layer--1"></div>
            <div className="intro__filter-layer intro__filter-layer--2"></div>
            {/* <video className="intro__video" autoPlay loop muted preload="auto" poster="/img/poster.jpg">
                <source src="/img/landing-video.mp4" type="video/mp4" />
            </video> */}
            <div className="container-fluid intro__container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="intro__heading">
                            Nunc sodales lectus
                            <br />
                            Vestibulum. Nunc. Mauris.
                        </h1>
                        <p className="intro__text">
                            Fusce vel mollis nunc, ac faucibus mi. Nunc turpis tortor, congue eu finibus eu, ultricies
                            ac diam. Aenean laoreet, ex eget bibendum bibendum, sem leo dapibus odio, at semper mi lacus
                            ut urna. In fermentum purus in mollis facilisis. Sed eget orci ullamcorper felis molestie
                            tristique. Maecenas commodo nisl ac neque scelerisque, sit amet dignissim nisi hendrerit.
                            Proin eget dictum augue, eget ornare neque.
                        </p>
                        <IntroImage />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
