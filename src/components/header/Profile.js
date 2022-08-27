import React, {useState} from 'react';
import {RiArrowDownSFill} from "react-icons/ri";
import User from "../../assets/images/users/default-user-image.png";
import {BiUserCircle} from "react-icons/bi";
import {ImExit} from "react-icons/im";
import {Link, useNavigate} from "react-router-dom";

function Profile(props) {
    const {child} = props;

    const navigate  = useNavigate();
    const goHome = () =>{
        navigate('/')

    }

    return (
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
    );
}

export default Profile;