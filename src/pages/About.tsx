import Image from 'next/image';

export default function About() {
    return (
        <main className="content inner-page">
            <div className="container-fluid inner-page__container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="main-heading">Company Overview</h1>
                        <p className="body-text">
                            Vestibulum ultrices facilisis eros, ac consequat lorem dictum eu. Curabitur euismod iaculis
                            erat, eget aliquam elit. Curabitur maximus, nibh at sagittis viverra, ipsum ligula viverra
                            libero, nec elementum dolor purus quis diam. Etiam porttitor, neque a imperdiet varius, diam
                            erat sagittis arcu, id elementum urna ex in lorem.
                        </p>
                    </div>
                </div>
            </div>
            <Image
                className="inner-page__banner"
                loading="lazy"
                width={1024}
                height={250}
                src="https://via.placeholder.com/1024x250.png"
                alt="company-overview-banner"
            />
            <div className="container-fluid inner-page__container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="secondary-heading">
                            Nulla hendrerit malesuada molestie. Sed lobortis turpis eget vehicula elementum. Phasellus
                            at dolor sed augue pharetra varius nec id felis. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia curae; Praesent ullamcorper lobortis quam id
                            tristique. Quisque et magna id urna elementum venenatis. Nunc pharetra, nisl id gravida
                            pretium, eros massa vestibulum justo, eu varius leo justo ut quam. Maecenas ultrices
                            efficitur lobortis. Maecenas aliquet pellentesque nunc, a varius dui aliquet porta.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.
                        </h2>
                        <p className="body-text">
                            Integer ac tempus tortor. Etiam maximus pretium sapien, quis sollicitudin turpis tincidunt
                            ac. Phasellus auctor turpis vel congue laoreet. Vestibulum nec lorem ante. Ut sed sem urna.
                            Duis rutrum purus ligula, nec suscipit mauris sodales et. Nullam quis nibh sed nunc posuere
                            imperdiet. Vivamus sapien dolor, tempor volutpat varius vulputate, blandit a nunc. Integer
                            ut malesuada nunc, vitae gravida neque. Donec a mi lobortis, semper massa sit amet, faucibus
                            arcu. Maecenas tincidunt gravida ligula, quis fermentum nunc egestas non.
                        </p>
                        <p className="body-text">
                            Donec sapien purus, <strong>dapibus nec vehicula ac</strong>, eleifend sit amet dui.
                            Vestibulum fermentum est ipsum, eget sodales ante rhoncus vitae. Ut viverra non ipsum quis
                            dapibus. Vivamus viverra diam consequat lacus <em>lacus</em> pellentesque pellentesque, non
                            congue tellus consectetur. Vivamus eleifend tellus et orci elementum lobortis. Nulla
                            venenatis laoreet leo eget vulputate. Curabitur nec pellentesque ex, et tincidunt sem. Nam
                            sed turpis dapibus, bibendum turpis a, vulputate elit. Proin sed rutrum dui. In ultrices
                            lectus mi, sit amet tempus enim placerat in.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
