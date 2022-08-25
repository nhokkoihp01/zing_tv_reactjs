import React, {useState} from 'react';
import LogoWeb from "../../assets/images/logo/logo.jpg";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

function NavbarLogo(props) {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')

    }
    return (
        <Logo onClick={goHome}>
            <img src={LogoWeb} alt=""/>
        </Logo>
    );
}

const Logo = styled.div`
  max-width: 200px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    padding-left: 12px;

  }
  @media only screen and (max-width: 768px) {
    //width: 30%;

  }

  a {
    width: 100%;
    height: 100%;
    display: block;
    padding: 4px 4px;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }


`;

export default NavbarLogo;