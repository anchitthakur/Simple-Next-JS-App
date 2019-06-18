import { useState } from 'react';
import { Provider } from 'react-redux'
import Api from '../components/Api';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Pagination from '../components/Pagination'
import store from "../components/store";

const ApiPages = () => {
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('tech')

    const clickHandler = (p) => {
        window.scrollTo(0, 0)
        setPage(p);
    }

    const increaseHandler = () => {
        let arr = []
        for (let i in pages) {
            console.log(arr)
            arr.push(parseInt(pages[i]) + 1)
        }
        console.log(arr)
        setPages(arr)
    }

    const decreaseHandler = () => {
        let arr = []
        for (let i in pages) {
            console.log(arr)
            arr.push(parseInt(pages[i]) - 1)
        }
        console.log(arr)
        setPages(arr)
    }

    const submitInput = (s) => {
        console.log('okay')
        setSearch(s)

    }
    return (
        <Provider store={store}>
            <Layout>
                <h2>NEWS</h2>
                <br />
                <Search submitInput={submitInput} />
                <br />
                <Pagination increaseHandler={increaseHandler} decreaseHandler={decreaseHandler} clickHandler={clickHandler} pages={pages} page={page} />
                <Api page={page} search={search} />
                <Pagination increaseHandler={increaseHandler} decreaseHandler={decreaseHandler} clickHandler={clickHandler} pages={pages} page={page} />
            </Layout>
        </Provider>)
}

export default ApiPages;