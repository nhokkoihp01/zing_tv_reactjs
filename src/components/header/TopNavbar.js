import React, {useRef, useState} from 'react';
import styled from "styled-components";
import NavbarLogo from "./NavbarLogo";
import NavbarTagPage from "./NavbarTagPage";
import NavbarInfoUser from "./NavbarInfoUser";
import {IoMdSearch} from "react-icons/io";
import User from "../../assets/images/users/user1.jpg";
import {useNavigate} from "react-router-dom";
import {useOnClickOutside} from "../hooks";

function TopNavbar(props) {
    const [show, setShow] = useState(false);
    const ref = useRef();
    const handleClose = () => {
        setShow(!show)
    }
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    useOnClickOutside(ref, () => setShow(false));
    const handleChangeInput = (e) => {
        let key = e.target.value;
        setKeyword(key)
        if (key.length > 0) {
            navigate(`/search?keywords=${key.trim()}`)
        } else {
            navigate(`/`)
        }

    }


    return (
        <TopNavbarContainer>
            <TopNavbarContent>
                <NavbarLogo/>
                <SearchContainer>
                    <SearchInput>
                        <input
                            className="input-search"
                            type="text"
                            onChange={handleChangeInput}
                            value={keyword}
                        />
                        <span className="btn--search">
                        <IoMdSearch className="search-icon"/>
                    </span>
                    </SearchInput>
                    {/*BEGIN SEARCH MOBILE*/}
                    <SearchUserMobile>
                <span className="btn__search-mobile"
                      onClick={() => setShow(!show)}>
                <IoMdSearch className="search-icon"/>
                </span>
                        <span className="user__image-mobile"

                        >
                <img src={User} alt=""/>
                </span>
                    </SearchUserMobile>


                    {/*END SEARCH MOBILE*/}
                </SearchContainer>
                <NavbarTagPage/>
                <NavbarInfoUser/>
            </TopNavbarContent>
            <SearchInputMobile ref={ref}>
                <div className={`${show ? "Search__mobile-content show" : "Search__mobile-content  "}`}>
                    <IoMdSearch className="search__icon-mobile"/>
                    <input className="search__input-mobile"
                           type="text"
                           onChange={handleChangeInput}
                           value={keyword}
                    />
                    <span className="cancel-search">X</span>
                </div>
            </SearchInputMobile>
        </TopNavbarContainer>
    );
}

const SearchInputMobile = styled.div`
  width: 100%;
  background-color: #F5F5F5;
  transition: all 0.3s linear;
  position: absolute;
  z-index: 1;
  @media only screen and (min-width: 768px) {
    display: none;
  }


  .Search__mobile-content {
    display: flex;
    align-items: center;
    padding: 12px 12px;
    display: none;

    &.show {
      display: flex;
    }


    .search__icon-mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.6rem;
      color: gray;
      opacity: 0.8;
      margin-right: 12px;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    .search__input-mobile {
      width: 100%;
      padding: 6px 0;
      border: none;
      outline: none;
      flex: 1;

    }

    .cancel-search {
      padding: 6px 12px;
      font-size: 1.4rem;
      cursor: pointer;

      &:hover {
        color: #ee4d2c;
      }
    }
  }





`;

const SearchUserMobile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    display: flex;
    align-items: center;
    margin-right: 20px
  }

  .btn__search-mobile {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 4px 12px;
    cursor: pointer;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }


    svg {
      font-size: 2rem;
      color: var(--while-color);
    }
  }

  .user__image-mobile {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;


`;

const SearchInput = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }


  .input-search {
    width: 100%;
    height: var(--navbar-height- 12px);
    outline: none;
    padding: 5px 0 5px 12px;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;


  }

  .btn--search {
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    height: 32px;
    line-height: 32px;
    padding: 4px 12px;
    background-color: var(--primary-color);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;


    .search-icon {
      color: var(--while-color);
      font-size: 2rem;
      font-weight: bold;

    }
  }




`;


const TopNavbarContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    padding: 0 24px;

  }

`;

const TopNavbarContainer = styled.div`
  width: 100%;
  height: var(--top-navbar);
  background-color: var(--navbar-background);





`;

export default TopNavbar;