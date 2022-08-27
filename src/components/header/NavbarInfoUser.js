import React, {useState} from 'react';
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import User from "../../assets/images/users/default-user-image.png";
import {RiArrowDownSFill} from "react-icons/ri";
import {BiUserCircle} from "react-icons/bi";
import {ImExit} from "react-icons/im";

function NavbarInfoUser(props) {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();
    const goLoginPage = () => {
        navigate('/login/')
    }
    const handleLogin = () => {
        setLogin(true);

    }
    const goHome = () =>{
        navigate('/')
        setLogin(false);

    }


    return (
        <InformationUser>


            {
                !login && (
                    <li className="login-link"
                        onClick={handleLogin}
                        >
                        <span>  Đăng nhập </span>
                    </li>

                )
            }
            {
                login && (
                    <div className="box__info-user">
                        <span className="box__info-avatar">
                            <img src={User} alt=""/>
                        </span>
                        <div className="box-profile">
                            <a className="single" href="">Cá nhân</a>
                            <RiArrowDownSFill/>
                            <div className="dropdown__user">
                                <div className="dropdown__user-content">
                                <span className="dropdown__user-avatar">
                                    <img src={User} alt=""/>
                                </span>
                                    <div className="dropdown__user-info">
                                        <li className="dropdown__info-item">
                                            <BiUserCircle className="dropdown__info-icon"/>
                                            <a href="">Trang cá nhân</a>
                                        </li>
                                        <li className="dropdown__info-item">
                                            <ImExit className="dropdown__info-icon"/>
                                            <a onClick={goHome} >Thoát</a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }


        </InformationUser>
    );
}

const InformationUser = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: all 0.3s linear;
  @media only screen and (max-width: 768px) {
    display: none;
  }


  .login-link {
    list-style: none;
    margin-left: 0;
    display: flex;
    align-items: center;
    //padding: 4px 8px;
    width: 100%;
    height: 100%;
    justify-content: right;
    cusor:pointer;

    span {
      color: var(--while-color);
      font-weight: bold;
      padding: 4px 6px;
      cursor:pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }

  .box__info-user {
    display: flex;
    align-items: center;
    //padding: 4px 8px;
    width: 100%;
    height: 100%;
    justify-content: right;
    @media only screen and (max-width: 1010px) {
      justify-content: center;
    }
    @media only screen and (max-width: 1010px) {
      margin-right: 20px ;
    }

    .box__info-avatar {
      width: 24px;
      height: 24px;
      margin-right: 6px;
      border: 1px solid var(--while-color);


      img {
        display: block;
        width: 100%;
        height: 100%;
        padding-bottom: 2px;


      }
    }

    .box-profile {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;

      &:hover .dropdown__user {
        display: block;

      }

      .single {
        color: var(--while-color);
        font-weight: bold;
      }

      svg {
        color: var(--while-color);
        font-size: 2rem;
        opacity: 0.8;
        margin-left: 14px;
      }

    }

    .dropdown__user {
      padding: 15px 20px;
      position: absolute;
      top: 42px;
      right: 0;
      box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
      background-color: var(--while-color);
      display: none;
      z-index: 1;


      &::after {
        content: "";
        position: absolute;
        border-style: solid;
        border-width: 0 10px 10px;
        border-color: transparent transparent #fff;
        position: absolute;
        top: -10px;
        right: 40px;
      }

      .dropdown__user-content {
        width: 100%;
        display: flex;
        list-style: none;

        .dropdown__user-avatar {
          width: 80px;
          height: 80px;
          margin-right: 12px;


          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .dropdown__user-info {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-left: 12px;
          width: 120px;

          .dropdown__info-item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: left;
            padding-bottom: 8px;

            &:hover a {
              color: var(--primary-color);
            }

            &:hover .dropdown__info-icon {
              color: var(--primary-color);
            }

            a {
              color: var(--text-color);
              font-weight: 500;


            }

            .dropdown__info-icon {
              //margin-right: 8px;
              font-size: 1.6rem;
              color: var(--text-color);

            }
          }
        }
      }
    }
  }
`;

export default NavbarInfoUser;