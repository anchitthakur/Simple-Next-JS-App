import Document, {Head, Main, NextScript} from "next/document";

export default class myDoc extends Document {
    render() {
        return (
            <html lang="id">
            <Head>
                <link rel="manifest" href="/static/manifest.json"/>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" type="image/x-icon" href="../static/favicon.ico"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}
