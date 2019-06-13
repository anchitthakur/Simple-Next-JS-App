import NewsItem from '../components/NewsItem';
import Fetcher from './Fetcher'
import React, { useEffect, useState } from 'react'
function Api(props) {
    const [arrv, setArrv] = useState([])
    let arr = []
    let data = Fetcher(props.page);
    useEffect(() => {
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
        },[props.page])

    return (
        <>
            <h2>NEWS</h2>
            {arrv}
        </>
    )
}

export default Api