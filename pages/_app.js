import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {pageview} from '../lib/googleAnalytics';
import {useEffect} from 'react';
import {hotjar} from 'react-hotjar';
import '../styles/index.scss';
import {ProvideAuth} from '../hooks/useAuth';
import RouteGuard from '../components/RouteGuard';
import Script from 'next/script';

function Application({Component, pageProps}) {
    const router = useRouter();
    useEffect(() => {
        hotjar.initialize(process.env.NEXT_PUBLIC_HJID, process.env.NEXT_PUBLIC_HJSV);
    }, []);
    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <Head>
                <title>Vestibulum Ultrices</title>
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                          page_path: window.location.pathname,
                        });`
                    }}
                />
            </Head>
            <ProvideAuth>
                <RouteGuard>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </RouteGuard>
            </ProvideAuth>
        </>
    );
}

export default Application;
