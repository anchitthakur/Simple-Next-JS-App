import NewsItem from '../components/NewsItem';
import Fetcher from './Fetcher'
import React, { useEffect, useState } from 'react'
function Api(props) {
    console.log(props.search)
    const [arrv, setArrv] = useState([])
    let arr = []

    useEffect(() => {
        let data = Fetcher(props.page, props.search);
        data.then(function (a) {
            console.log(props.page)
            console.log(a)
            for (let i of a.articles) {
                arr.push(
                    <NewsItem key={i.url} props={i} />
                )
            }
            setArrv(arr)
        })
    },[props.page,props.search])

    return (
        <>
            {arrv}
        </>
    )
}

export default Api