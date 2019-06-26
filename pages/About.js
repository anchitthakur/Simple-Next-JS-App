import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout';

function About() {
    return <Layout>
        <Head>
            <meta keywords="About" />
        </Head>
        <h2>About</h2>
        <p>This is a website that uses <a href = "https://newsapi.org">https://newsapi.org</a> API to get the latest news </p>
        <p>Source code: <a href = "https://github.com/anchitthakur/Simple-next-js-app">https://github.com/anchitthakur/Simple-next-js-app</a> </p>
    </Layout>
}

export default About