import { useState } from 'react';
import { Provider } from 'react-redux'
import Api from '../components/Api';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Pagination from '../components/Pagination'
import store from "../components/store";
import Head from 'next/head'

const ApiPages = () => {
    const [search, setSearch] = useState('tech')
    
    const submitInput = (s) => {
        setSearch(s)

    }
    return (
        <Provider store={store}>
            <Head>
                <meta keywords = "API" />
            </Head>
            <Layout>
                <h2>NEWS</h2>
                <br />
                <Search submitInput={submitInput} />
                <br />
                <Pagination/>
                <Api search={search} />
                <Pagination/>
            </Layout>
        </Provider>)
}

export default ApiPages;