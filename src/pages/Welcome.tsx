import {useAuth} from '../hooks/useAuth';

export function Welcome() {
    const {user} = useAuth();
    const nameChunk = user?.name ? `, ${user.name}!` : '';
    return (
        <main className="content inner-page">
            <div className="container-fluid inner-page__container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="main-heading">{`Welcome ${nameChunk}`}</h1>
                        <h2 className="secondary-heading">Nullam lacinia mauris et arcu volutpat!</h2>
                        <p className="body-text">
                            Aliquam a ligula ut felis rutrum ornare. Duis tincidunt nisi in nisl interdum venenatis.
                            Aliquam mollis sem eu quam molestie, sed pellentesque libero tincidunt.
                        </p>
                        <img
                            src="https://via.placeholder.com/928x370.png"
                            alt="welcome-illustration"
                            width={928}
                            height={370}
                            className="welcome__image"
                        />
                        <p className="secondary-heading secondary-heading--date">
                            Phasellus mollis arcu orci, id molestie leo varius et.
                        </p>
                        <p className="body-text">
                            Nam placerat nisi tincidunt, hendrerit lectus sed, sollicitudin lacus. In molestie orci
                            faucibus sem ullamcorper, ut varius turpis convallis.
                        </p>
                        <p className="body-text">
                            Cras at scelerisque mi, vel blandit mauris. Nam hendrerit auctor lacus, vitae laoreet enim
                            commodo eu. Donec sapien purus, dapibus nec vehicula ac, eleifend sit amet dui. Vestibulum
                            fermentum est ipsum, eget sodales ante rhoncus vitae. Ut viverra non ipsum quis dapibus.
                            Vivamus viverra diam consequat lacus pellentesque, non congue tellus consectetur.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
