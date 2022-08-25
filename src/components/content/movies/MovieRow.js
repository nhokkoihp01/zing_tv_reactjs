import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-router-dom";
import {Divider, Form, Radio, Skeleton, Space, Switch} from 'antd';


function MovieRow(props) {
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    const [size, setSize] = useState('default');
    const {title, movies} = props;
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const slider = useRef();
    const gotoNext = () => {
        slider.current.slickNext()
    }
    const gotoPrev = () => {
        slider.current.slickPrev()
    }
    const getPosterURL = (posterPath) => {
        return `https://image.tmdb.org/t/p/original/${posterPath}`
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [])
    return (
        <MovieRowContainer>
            <h2 className="movie__heading">{title}</h2>
            <MovieRowContent>
                <Slider {...settings} ref={slider}>
                    {
                        movies && movies.length > 0 && movies.map((movie, index) => {
                            return (
                                <MovieItem key={index}>
                                    <div className="movie__item-info">
                                        <Link to={`/movie/${movie.name || movie.title}`}>
                                            {
                                                loading ? (<Skeleton.Image loading={loading}
                                                        style={{width: '225px', height: '230px',}}
                                                        active={active}/>) :
                                                    <img src={getPosterURL(movie.backdrop_path)} alt=""/>
                                            }


                                        </Link>
                                        <div className={loading ? '' :'description'}>
                                            {
                                                loading ? (<Skeleton.Input active={active} value="large"/>)
                                                    : (<h4>{movie.name || movie.title}</h4>)
                                            }
                                        </div>

                                    </div>
                                </MovieItem>

                            )
                        })
                    }

                </Slider>
                <span className="btn__movie-left"
                      onClick={gotoPrev}
                >
                   <MdOutlineKeyboardArrowLeft/>
               </span>
                <span className="btn__movie-right"
                      onClick={gotoNext}
                >
                   <MdOutlineKeyboardArrowRight/>
               </span>

            </MovieRowContent>

        </MovieRowContainer>
    );
}

const MovieItem = styled.div`
  max-width: 225px;
  width: 100%;
  height: 230px;
  padding: 8px 8px;
  cursor: pointer;
  scale: 1;
  transition: 0.3s all linear;

  &:hover {
    scale: 1.1;
  }

  .movie__item-info {
    width: 100%;
    height: 100%;
    position: relative;

    .ant-skeleton-element .ant-skeleton-image-svg {
      display: none;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .description {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 8px 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .01) 2%,
      rgba(0, 0, 0, .01) 3%, rgba(0, 0, 0, .04) 11%, rgba(0, 0, 0, .21) 33%, rgba(0, 0, 0, .61) 73%,
      rgba(0, 0, 0, .87) 100%);

      h4 {
        font-size: 1.6rem;
        color: #fff;
        padding-left: 12px;
        line-height: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        padding-left: 12px;

      }

    }
  }






`;
const MovieRowContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .slick-prev, .slick-next {
    display: none !important;
  }

  .btn__movie-left {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 6px 8px;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);

    &:hover {
      color: var(--primary-color);
      background-color: #fff;
    }

    svg {
      font-size: 2.8rem;
    }


  }

  .btn__movie-right {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 6px 8px;
    top: 50%;
    right: -40px;

    transform: translateY(-50%);

    &:hover {
      color: var(--primary-color);
      background-color: #fff;
    }

    svg {
      font-size: 2.8rem;
    }


  }






`;
const MovieRowContainer = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;

  .movie__heading {
    font-size: 2.4rem;
    text-shadow: 0 1px 1px #fff;
    padding: 24px 12px 0 12px;
    text-transform: uppercase;
    color: var(--text-color);
    font-weight: 200;

  }


`;

export default MovieRow;