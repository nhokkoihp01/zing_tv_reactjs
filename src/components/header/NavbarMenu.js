import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {HiMenu} from 'react-icons/hi';
import MenuItem from "./MenuItem";
import User from '../../assets/images/users/user_slide_navbar.jpg';
import {TbUser} from 'react-icons/tb';
import SlideNavbarItem from "./slideNavbar/SlideNavbarItem";
import {AiOutlineClockCircle} from 'react-icons/ai';
import {AiOutlineSetting} from 'react-icons/ai';
import {useOnClickOutside} from "../hooks";


function NavbarMenu(props) {
    const ref = useRef();
    const [show,setShow]  = useState(false);
    useOnClickOutside(ref, () => setShow(false));



    return (
        <NavbarMenuContainer>
            <NavbarMenuContent>
                <span className="menubar"
                      onClick={()=> setShow(!show)}
                >
                    <HiMenu className="menubar-icon"/>
                </span>
                <MenuItem title="Phim truyền hình"/>
                <MenuItem title="TV show" width_360={true}/>
                <MenuItem title="Hoạt hình"/>
                <MenuItem title="Hài hước" width_180={true}/>
                <MenuItem title="Thiếu nhi" width_360={true}/>
                <MenuItem title="Âm nhạc" width_180={true}/>
            </NavbarMenuContent>
            <SlideNavbar ref={ref} className={show ? 'show animate__animated animate__fadeInLeft' :''}>
                <div className="slide__navbar-head">
                    <div className="slide__navbar-avatar">
                        <img src={User} alt=""/>
                    </div>
                    <div className="slide__navbar-name">
                        <h3>Chào bạn,Minh Huy!</h3>
                    </div>
                </div>
                <SlideNavbarItem title="Trang cá nhân" Icon={TbUser}/>
                <SlideNavbarItem title="Vừa mới xem" Icon={AiOutlineClockCircle}/>
                <div className="line"></div>
                <div className="service__care">
                    <a>Chương trình quan tâm</a>
                    <AiOutlineSetting/>
                </div>


            </SlideNavbar>


        </NavbarMenuContainer>
    );
}

const SlideNavbar = styled.div`
  width: 315px;
  height: 100%;
  position: fixed;
  border-top: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  transition: all 0.3s linear;
  left: 0;
  z-index: 1;
  display: none;
  background-color: var(--while-color);
  @media only screen and (max-width: 992px) {
   width: 250px;

  }
  
  &.show{
    display: block;
    
  }

  .slide__navbar-head {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    box-shadow: 0 1px 0 #e5e5e5;
    background-color: #F7F7F7;
    @media only screen and (max-width: 992px) {
      padding: 8px 22px;

    }

    .slide__navbar-avatar {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      @media only screen and (max-width: 992px) {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .slide__navbar-name {

      h3 {
        margin-bottom: 0;
        color: var(--text-color);
      }
    }
  }

  .slide__navbar-link {
    display: flex;
    align-items: center;
    padding: 10px 60px 10px 30px;
    list-style: none;
    @media only screen and (max-width: 992px) {
      padding: 12px 22px;

    }
    svg {
      font-size: 2.6rem;
      margin-right: 4px;
    }

    a {
      color: var(--text-color);
      font-size: 1.6rem;
    }
  }
  

  .service__care {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 30px;
   
 

    a {
      display: block;
      color: var(--text-color);
      padding-top: 20px;
      margin-bottom: 0;
      border-top: 1px solid #F7F7F7;
      padding-right:  40px;
      text-transform: uppercase;
      font-weight: 500;
      @media only screen and (max-width: 992px) {
        padding-right: 0;
        font-size: 1.4rem;

      }
      &:hover{
        color: var(--primary-color);
      }
    }

    svg {

      margin-top: 12px;
      font-size: 2.2rem;
      line-height: 2.2rem;
      &:hover{
        color: var(--primary-color);
      }
    }
  }
`;


const NavbarMenuContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    padding: 0 24px;
  }


  .menubar {
    width: 30px;
    height: 32px;
    margin-right: 24px;
    cursor: pointer;

    :hover {

    }

    .menubar-icon {
      display: block;
      width: 100%;
      height: 100%;

    }
  }

`;

const NavbarMenuContainer = styled.div`
  width: 100%;
  height: var(--navbar-menu-height);
  background-color: var(--navbar-background-menu);
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 992px) {
    padding: 0 12px;
  }



`;

export default NavbarMenu;