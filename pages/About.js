import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout';

function About() {
    return <Layout>
        <Head>
            <meta keywords="About" />
        </Head>
        <h2>About Us</h2>
        <p>This is a website that uses https://newsapi.org API to get the latest news </p>
    </Layout>
}

export default About