import React, {useEffect} from 'react';
import styled from "styled-components";
import Movie1 from '../../../assets/images/movies/detail_movie/dinhmenh1.jpg';
import {useDispatch, useSelector} from "react-redux";
import {getMovieByName, getSearchMovies} from "../../store/action";
import {useParams, useNavigate} from "react-router-dom";
import MovieInfo from "./MovieInfo";


function DetailMovie(props) {
    const slug = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(slug.movieName)// App.js
    useEffect(() => {
        dispatch(getSearchMovies(slug.movieName))
    }, [slug.movieName, dispatch])
    const movie = useSelector(state => state.infoMovies.Movie);
    const getPosterURLBackDrop = (posterPath) => {
        return `https://image.tmdb.org/t/p/original/${posterPath}`
    }
    const getPosterURL500 = (posterPath) => {
        return `https://image.tmdb.org/t/p/w500/${posterPath}`
    }

    return (
        <DetailMovieContainer>
            <DetailMovieContent>
                {/*<div className="movie__detail-image">*/}
                {/*    <img src={movie != null ? getPosterURL500(movie.poster_path) :''} alt=""/>*/}
                {/*</div>*/}
                <div className="movie__detail-info">
                    <div className="movie__info-avatar">
                        <img src={movie != null ? getPosterURL500(movie.poster_path) : ''} alt=""/>
                    </div>
                    <MovieInfo/>

                    <div className="movie__group">
                        <span
                            className="movie__group-nation"><b>The Popularity:</b> {movie!== null ? (movie.popularity):''}</span>
                        <span className="movie__group-time"><b>Đánh giá:</b>
                            <strong style={{
                                paddingLeft: '10px'
                                , color: 'var(--text-color)',
                                fontWeight: '500',
                            }}>
                            {movie !== null ? (movie.vote_average) : ''}
                            </strong>
                        </span>
                    </div>
                </div>
            </DetailMovieContent>

        </DetailMovieContainer>
    );
}


const DetailMovieContent = styled.div`
  width: 100%;

  .movie__detail-image {
    display: block;
    width: 100%;
    height: 450px;


    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .movie__detail-info {
    display: flex;
    padding: 24px 34px;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    .movie__info-avatar {
      width: 250px;
      height: 180px;
      margin-right: 30px;
      border: 1px solid #ccc;
      padding: 1px 1px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }


    .movie__group {
      display: flex;
      flex-direction: column;
      width: 300px;
      border-left: 1px solid #ccc;
      padding-left: 24px;
      @media only screen and (max-width: 992px) {
        display: none;

      }
    }


  }



`;
const DetailMovieContainer = styled.div`
  width: 100%;


`;

export default DetailMovie;
