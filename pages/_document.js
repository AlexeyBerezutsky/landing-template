// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" /> */}
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    {/* <link rel="icon" type="image/png" sizes="180x180" href="/favicon/apple-touch-icon.png" /> */}
                    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/favicon-192x192.png" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap-grid.min.css"
                        rel="stylesheet"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
