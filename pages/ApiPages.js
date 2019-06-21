import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { useEffect, useState,useRef } from 'react'
import { connect } from 'react-redux'
import Api from '../components/Api';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Pagination from '../components/Pagination'

const ApiPages = (props) => {
    const [data, setData] = useState(props.data)
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current)
            mounted.current = true
        else
            ApiPages.getInitialProps({ page: props.page, search: props.search })
                .then(json => setData(json.data))
    }, [props.page, props.search])

    return (
        <>
            <Head>
                <meta keywords="API" />
            </Head>
            <Layout>
                <h2>NEWS</h2>
                <br />
                <Search />
                <br />
                <Pagination />
                <Api data={data} />
                <Pagination />
            </Layout>
        </>)
}

ApiPages.getInitialProps = async function ({ search = 'tech', page = '1' }) {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + search + '&' +
        'sortBy=publishedAt&' +
        'page=' + page + '&' +
        'pageSize=5&language=en&' +
        'apiKey=3b214239993247f18926b8fab6ee014f';
    const res = await fetch(url);
    const json = await res.json()
    return { data: json }

}
const mapStateToProps = state => ({
    page: state.page.page,
    search: state.page.search
})

export default connect(mapStateToProps, null)(ApiPages)