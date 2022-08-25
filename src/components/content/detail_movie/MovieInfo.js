import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

function MovieInfo(props) {
    const movie = useSelector(state => state.infoMovies.Movie);
    return (
        <MovieInfoContent>
            <div className="movie__info-content">
                <h3 className="movie__info-title">{movie != null ? (movie.title || movie.name):''}</h3>
                <p><b>tag: </b>Tâm Lý - Lãng Mạn, Phim, Phim Hoa Ngữ, Phim Đài Loan</p>
                <span> <b>Thể loại: </b>Tâm Lý - Lãng Mạn, Phim, Phim Hoa Ngữ, Phim Đài Loan</span>
                <p className="movie__info-overview">
                    {movie != null ? (movie.overview):''}
                </p>
                <a className="movie__info-link" href="">Xem toàn bộ</a>

            </div>
        </MovieInfoContent>
    );
}
const MovieInfoContent = styled.div`
  display: flex;
  padding-right: 24px;
  flex: 1;
  @media only screen and (max-width: 992px) {
    justify-content: center;
  }

  .movie__info-content {

    .movie__info-title {
      font-size: 2rem;
      color: #0f820c;
      @media only screen and (max-width: 768px) {
        padding-top: 20px;
      }
    }

    .movie__info-link {
      color: #0f820c;
      font-size: 1.4rem;
    }
  }


  
`;

export default MovieInfo;