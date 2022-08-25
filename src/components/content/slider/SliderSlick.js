import React, {useRef} from 'react';
import Slider from "react-slick";
import Slider1 from '../../../assets/images/slider/slide1.jpg';
import Slider2 from '../../../assets/images/slider/slide2.jpg';
import styled from "styled-components";
import Dot1 from '../../../assets/images/slider/dots/dots1.jpg';
import {baseUrl} from '../../../config';
import {MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'


function SliderSlick(props) {

    const slider = useRef();
    const gotoNext = () => {
        slider.current.slickNext()
    }
    const gotoPrev = () => {
        slider.current.slickPrev()
    }
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`${baseUrl}/dots${i + 1}.jpg`}/>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    return (
        <SliderContainer>
            <SliderContent>
                <Slider {...settings} ref={slider}>
                    <div>
                        <a href="">
                            <img className="slider__item-image"
                                 src="https://zingtv-photo.zmdcdn.me/tv/b/5/2/2/b522afe85916717e89054bb84b81eb85.jpg"/>
                        </a>
                        <div className="slider__title">
                            <h3>Năm tháng vội vã</h3>
                        </div>
                    </div>
                    <div>
                        <a href="">
                            <img className="slider__item-image"
                                 src="https://zingtv-photo.zmdcdn.me/tv/c/9/6/3/c963af11813544fe79c2f9f2762d1619.jpg"/>
                        </a>
                        <div className="slider__title">
                            <h3>Xin em hãy yêu anh</h3>
                        </div>
                    </div>

                </Slider>
                <span className="btn__slider-left animate__animated animate__fadeInRight"
                      onClick={gotoPrev}
                >
                    <MdOutlineKeyboardArrowLeft/>
                </span>
                <span className="btn__slider-right animate__animated animate__fadeInRight"
                      onClick={gotoNext}>
                    <MdKeyboardArrowRight/>
                </span>


            </SliderContent>

        </SliderContainer>
    );
}


const SliderContent = styled.div`
  width: 100%;
  position: relative;

  &:hover .btn__slider-left {
    display: block;
  }

  &:hover .btn__slider-right {
    display: block;
  }

  div {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .slider__title {
      max-width: 400px;
      width: 100%;
      position: absolute;
      top: 80%;
      left: 40px;
      @media only screen and (min-width: 992px) {
        top: 68%;

      }
      @media only screen and (max-width: 992px) {
        max-width: 300px;
        left: 20px;
        top: 70%;

      }
      @media only screen and (max-width: 768px) {
        max-width: 250px;
        left: 20px;
        top: 60%;

      }
      @media only screen and (max-width: 600px) {
        display: none;

      }
      @media only screen and (max-width: 418px) {
        display: none;

      }

      h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        padding: 12px 4px;
        color: var(--while-color);
        background-color: rgba(0 0 0 / 50%);
        margin-bottom: 0;
        @media only screen and (max-width: 768px) {
          font-size: 1.8rem;

        }

      }
    }
  }

  .btn__slider-left {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    left: 40px;
    display: none;
    @media only screen and (max-width: 768px) {
      top: 40%;

    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    svg {
      font-size: 6rem;
      color: var(--while-color);
      font-weight: bold;
      @media only screen and (max-width: 768px) {
        font-size: 4rem;
      }
    }

  }

  .btn__slider-right {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    right: 40px;
    display: none;
    @media only screen and (max-width: 768px) {
      top: 40%;

    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    svg {
      font-size: 6rem;
      color: var(--while-color);
      font-weight: bold;
      @media only screen and (max-width: 768px) {
        font-size: 4rem;
      }
    }

  }

  .animate__animated.animate__fadeInRight {
    animation-duration: 0.3s;
  }



`;

const SliderContainer = styled.div`
  width: 100%;

  .slick-dots {
    text-align: end;
    bottom: 20px;
    right: 20px;


  }

  .slick-dots li {
    width: 60px;
    height: 60px;
    padding: 2px 2px;
    background-color: var(--while-color);
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

`;

export default SliderSlick;