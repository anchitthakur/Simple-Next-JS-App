import Head from "next/head";
import fetch from "isomorphic-unfetch";
import {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Api from "../components/Api";
import Layout from "../components/Layout";
import Search from "../components/Search";
import {changePage} from "../components/actions/pageAction";
import Loader from "../components/Loader";

const ApiPages = props => {
  if (props.page <= 0 || props.page > 10) props.changePage(1);

  const [data, setData] = useState(props.data);
  const mounted = useRef(0);
  useEffect(() => {
    if (!props.isFetched || mounted.current) {
        props.changePage(1);
      ApiPages.getInitialProps({
        page: 1,
        search: props.search,
        isUser: 1
      }).then(json => {
        setData(json.data);
      });
    }
  }, [props.search]);

  useEffect(() => {
    if (!props.isFetched || mounted.current) {
      ApiPages.getInitialProps({
        page: props.page,
        search: props.search,
        isUser: 1
      }).then(json => {
        var temp = jsonConcat(data, json.data);
        setData(temp);
      });
    } else {
      mounted.current = 1;
    }
  }, [props.page]);

  const fetchMoreData = () => {
    props.changePage(props.page + 1);
  };

  function jsonConcat(o1, o2) {
    var t = [];
    for (var key in o1) {
      t[parseInt(key)] = o1[key];
    }
    for (var key in o2) {
      t[parseInt(key) + parseInt(data.length)] = o2[key];
    }

    return t;
  }
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
        <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={data.length !== 100}
            loader={<Loader/>}
            endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Api data={data} />
        </InfiniteScroll>
      </Layout>
    </>
  );
};

ApiPages.getInitialProps = async function({
  search = "tech",
  page = 1,
  isUser = 0
}) {
    if (isUser === 0 && !(typeof window === "undefined"))
    return { data: [], isFetched: false };

    let url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    search +
    "&" +
    "sortBy=publishedAt&" +
    "page=" +
    page +
    "&" +
    "pageSize=10&language=en&" +
    "apiKey=3b214239993247f18926b8fab6ee014f";
    console.log('===================');
    console.log(url);
  const res = await fetch(url);
  const json = await res.json();
  return { data: json.articles, isFetched: true };
};
const mapStateToProps = state => ({
  page: state.page.page,
  search: state.page.search
});

export default connect(
  mapStateToProps,
  { changePage }
)(ApiPages);
