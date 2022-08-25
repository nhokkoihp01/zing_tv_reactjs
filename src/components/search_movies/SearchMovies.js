import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Col, Row, Skeleton} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {getSearchMovieByName} from "../store/action";

function SearchMovies(props) {
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    const [size, setSize] = useState('default');
    const dispatch = useDispatch();
    const SearchMovieList = useSelector(state => state.infoMovies.GetListMovieByName);
    const useQuery = () => new URLSearchParams(useLocation().search);
    const keywords = useQuery().get('keywords');
    // console.log(keywords);
    useEffect(() => {
        if (keywords.length > 0) {
            dispatch(getSearchMovieByName(keywords))
        }

    }, [keywords, dispatch])
    // console.log(SearchMovieList)
    const getPosterURLBackDrop = (posterPath) => {
        return `https://image.tmdb.org/t/p/original/${posterPath}`
    }
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
    })

    return (
        <SearchMoviesContainer>
            <SearchMoviesContent>
                <Row gutter={[8, 8]}>
                    {
                        SearchMovieList && SearchMovieList.length > 0 ? (
                                SearchMovieList.map((movie, index) => {
                                    if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                                        return (
                                            <Col key={index} className="gutter-row" lg={6} md={8} sm={12} xs={24}>
                                                <MovieSearchItem className="movie__search-item">
                                                    <div className="movie__search-info">
                                                        <div className="movie__item-avatar">
                                                            <Link to={`/movie/${movie.name || movie.title}`}>
                                                                {loading ? (<Skeleton.Image
                                                                        style={{width: '100%', height: '250px',}}
                                                                        active={active}/>
                                                                ) : (
                                                                    <img src={getPosterURLBackDrop(movie.backdrop_path)}
                                                                         alt=""/>
                                                                )}


                                                            </Link>
                                                        </div>
                                                        <div className={loading ? '':'movie__item-description'}>

                                                            {
                                                                loading ? (
                                                                    <Skeleton.Input active={active} value="large"/>
                                                                ) :(
                                                                    <h3 className="movie__item-title">{movie.name || movie.title}</h3>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </MovieSearchItem>
                                            </Col>
                                        )
                                    }
                                })
                            )
                            : (
                                <NotFound>
                                    <h1>Không tìm thấy phim bạn cần tìm !!!</h1>
                                </NotFound>
                            )
                    }

                </Row>

            </SearchMoviesContent>


        </SearchMoviesContainer>
    );
}

const NotFound = styled.div`
  width: 100%;
  padding: 12px 12px;
  text-align: center;
  height: 100vh;

  h1 {
    color: var(--primary-color);
    font-size: 2rem;
  }

`;

const MovieSearchItem = styled.div`
  width: 100%;
  height: 100%;

  .movie__search-info {
    width: 100%;
    height: 100%;
    position: relative;

    .ant-skeleton-element .ant-skeleton-image-svg {
      display: none;
    }

    .movie__item-avatar {
      width: 100%;
      height: 100%;
      cursor: pointer;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .movie__item-description {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .01) 2%,
    rgba(0, 0, 0, .01) 3%, rgba(0, 0, 0, .04) 11%, rgba(0, 0, 0, .21) 33%, rgba(0, 0, 0, .61) 73%,
    rgba(0, 0, 0, .87) 100%);
    padding: 0 8px;

    .movie__item-title {
      margin-bottom: 0;
      padding: 4px 6px;
      color: #fff;
      font-size: 1.6rem;
    }
  }



`;

const SearchMoviesContent = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;



`;
const SearchMoviesContainer = styled.div`
  width: 100%;


`;

export default SearchMovies;
