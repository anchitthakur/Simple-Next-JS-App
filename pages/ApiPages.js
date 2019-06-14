import { useState, useEffect } from 'react';
import Api from '../components/Api';
import Layout from '../components/Layout';
import React, { Component } from 'react'
import Search from '../components/Search';

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

    const submitInput =(s) =>{
        console.log('okay')
        setSearch(s)

    }
    return (
        <Layout>
            <h2>NEWS</h2>
            <br />
            <Search submitInput = {submitInput}/>
          <br />
            <Api page={page} search = {search}/>
            <ul className="pagination">
                <li className={pages[0] > 1 ? "page-item " : "page-item disabled"}>
                    <a className="page-link" onClick={decreaseHandler}>-</a>
                </li>
                <li className={pages[0] === page ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => clickHandler(pages[0])}>{pages[0]}</a>
                </li>
                <li className={pages[1] === page ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => clickHandler(pages[1])}>{pages[1]}</a>
                </li>
                <li className={pages[2] === page ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => clickHandler(pages[2])}>{pages[2]}</a>
                </li>
                <li className={pages[3] === page ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => clickHandler(pages[3])}>{pages[3]}</a>
                </li>
                <li className={pages[4] === page ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={() => clickHandler(pages[4])}>{pages[4]}</a>
                </li>
                <li className={pages[4] === 20 ? "page-item disabled" : "page-item"}>
                    <a className="page-link" enabled="true" onClick={increaseHandler}>+</a>
                </li>
            </ul>
        </Layout>)
}

export default ApiPages;