import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Api from "../components/Api";
import Layout from "../components/Layout";
import Search from "../components/Search";
import { changePage } from "../components/actions/pageAction";

const ApiPages = props => {
  console.log(props);
  const [data, setData] = useState(props.data);
  const test = useRef(0);
  const mounted = useRef(0);
  useEffect(() => {
    console.log("hmm");
    test.current = 1;
  }, [props.search]);

  useEffect(() => {
    if (!props.isFetched || mounted.current) {
      if (test.current == 0) {
        ApiPages.getInitialProps({
          page: test.current ? 1 : props.page,
          search: props.search,
          isUser: 1
        }).then(json => {
          console.log(test.current);

          var temp = jsonConcat(data, json.data);
          setData(temp);
        });
      } else {
        test.current = 0;
        setData([]);
        props.changePage(1);
      }
    } else {
      mounted.current = 1;
      test.current = 0;
    }
  }, [props.page, props.search]);

  const fetchMoreData = () => {
    console.log("called");
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
          hasMore={data.length === 100 ? false : true}
          loader={<h4>Loading...</h4>}
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
  if (isUser == 0 && !(typeof window === "undefined"))
    return { data: [], isFetched: false };

  var url =
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
