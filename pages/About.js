import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout';

function About() {
    return <Layout>
        <Head>
            <meta keywords="About" />
        </Head>
        <h2>About</h2>
        <p>This is a website that uses https://newsapi.org API to get the latest news </p>
        <p>github: https://github.com/anchitthakur/Simple-next-js-app </p>
    </Layout>
}

export default About