import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        const response = await fetch(url);
        const data = await response.json();
        if (page === 1) {
          setArticles(data.articles);
        } else {
          setArticles(prevArticles => [...prevArticles, ...data.articles]);
        }
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.country, props.category, props.apiKey, props.pageSize, page]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} | NewsWeb`;
    // Reset the articles and page when category or country changes
    setArticles([]);
    setPage(1);
  }, [props.category, props.country]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let style = {
    color: 'black',
    backgroundColor: 'white'
  };

  if (props.mode === 'dark') {
    style = {
      color: 'white',
      backgroundColor: 'black'
    };
  }

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "20px" }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>

      {loading && <Spinner mode={props.mode} />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        key={page}>

        <div className="container py-2" style={style}>
          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-4" key={`${element.url}-${index}`}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  author={element.author}
                  date={element.publishedAt}
                  imgURL={element.urlToImage}
                  link={element.url}
                  source={element.source.name}
                  mode={props.mode} />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'general',
  mode: 'light',
  apiKey: process.env.REACT_APP_NEWS_API
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  mode: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default News;
