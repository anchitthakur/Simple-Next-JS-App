import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>My App</title>
            <link rel="stylesheet" href="/static/bootstrap.min.css" />
        </Head>
        <div className="container"><Navbar /></div>
        <div className="container">{props.children}</div>
    </div>
);

export default Layout;