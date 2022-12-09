export function Business({className, id}: Element) {
    return (
        <section className={className} id={id}>
            <div className="container-fluid business__container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className="business__title">{'Praesent lacinia mollis sapien.'}</h2>
                        <p className="business__text">
                            Curabitur sit amet molestie risus. Vestibulum scelerisque turpis vel augue rutrum, id
                            vulputate erat pharetra. Etiam varius, mauris ac pellentesque vehicula, ante felis efficitur
                            ante, eu dapibus purus nunc nec diam. Morbi congue ut diam nec varius. Phasellus vitae erat
                            at sem tincidunt pellentesque. Donec in urna eu odio vestibulum luctus.
                        </p>
                        <img
                            className="business__image"
                            src="https://via.placeholder.com/927x555.png"
                            alt="illustration"
                            width={927}
                            height={555}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
