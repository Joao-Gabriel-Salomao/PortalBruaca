import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="shortcut icon" href="/img/favicon.jpg" type="image/x-icon" />
                </Head>

                        <body>
                            <Main />
                            <NextScript />
                        </body>
            </Html>
        );
    }
}