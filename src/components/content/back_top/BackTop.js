import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import styled from "styled-components";
import {RiArrowUpSLine} from 'react-icons/ri';
import {useScrollY} from "../../hooks";

function BackTop(props) {
    const ScrollToTop = () => {
        scroll.scrollToTop();
    }
    const [scrollY] = useScrollY();
    return (
        <GoToTop
            onClick={() => ScrollToTop()}
            style={{visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`}}>
            <span className="go__top">
                <RiArrowUpSLine className="go__top-icon"/>
            </span>

        </GoToTop>
    );
}

const GoToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  transition: all 0.3s linear;
  cursor: pointer;
  z-index: 9999;
 
  &:hover svg{
    transition: 0.3s linear all;
    animation: backTop 0.3s linear infinite;
  }
  svg {
    font-size: 3rem;

  }
  .go__top-icon{
    font-size: 2.4rem;
    font-weight: bold;
    color: var(--primary-color);
  }
  @keyframes backTop{
    0%{
      transform: translateY(1px);
    }
    50%{
      transform: translateY(3px);
    }
    100%{
      transform: translateY(6px);
    }
  }


`;

export default BackTop;