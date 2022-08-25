import React from 'react';
import styled from "styled-components";

function MenuItem(props) {
    const {title,width_360,width_180} = props;
    const menuItems = [
        {
            id:1,
            title:'Phim Hàn Quốc'
        },
        {
            id:2,
            title:'Phim Hoa Ngữ'
        },
        {
            id:3,
            title:'Phim Thái lan'
        },
        {
            id:4,
            title:'Phim Việt Nam'
        },
        {
            id:4,
            title:'Phim Đài Loan'
        },
        {
            id:6,
            title:'Phim Nhật Bản'
        },
        {
            id:7,
            title:'Phim Âu Mỹ'
        },
        {
            id:8,
            title:'Phim Nhật Bản'
        },
    ]
    return (
        <MenuPane>
            <li className="navbar__item">
                <a className="navbar__item-link" href="">{title}</a>
                <div className={
                    `${width_180 ? 'navbar__item-dropdown width-180' :
                        width_360 ? 'navbar__item-dropdown width-360' :
                            'navbar__item-dropdown '
                    } 
                `}>
                    <Option>
                        {menuItems.map((menuItem,id)=>{
                           return(
                               <OptionItem key={id} className={
                                   `${width_180 ? 'width__item-180':
                                       width_360 ? 'width__item-360':
                                           ''
                                   }`}>
                                   <a href="">{menuItem.title}</a>
                               </OptionItem>
                           )
                        })}
                    </Option>


                </div>
            </li>


        </MenuPane>
    );
}

const OptionItem = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  border: 1px solid #F5F5F5;

  &.width__item-360 {
    width: 50%;
  }

  &.width__item-180 {
    width: 100%;
  }

  :hover {
    background-color: var(--primary-color);
  }

  a {
    color: var(--text-color);

  }



`;

const Option = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  
  a {
    display: block;
    padding: 8px 12px;


  }


`;
const MenuPane = styled.div`
  height: 100%;

  .navbar__item {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 12px;
    border: 0px 1px 1px 1px solid #F5F5F5;
    position: relative;

    &:hover .navbar__item-dropdown {
      display: block;
    }

    &:hover {
      background-color: var(--while-color);

    }

    .navbar__item-link {
      color: var(--text-color);
      font-size: 1.4rem;
    }

    .navbar__item-dropdown {
      position: absolute;
      top: 32px;
      left: 0;
      display: none;
      width: 720px;
      z-index: 999999;
      background-color: var(--while-color);
      @media only screen and (max-width: 992px) {
        width: 620px;
      }
      @media only screen and (max-width: 900px) {
        width: 500px;
      }
      
      

      &.width-360 {
        width: 360px;
      }
      &.width-180 {
        width: 180px;
      }

      &::after {
        content: "";
        position: absolute;
        width: 130px;
        height: 10px;
        top: -4px;
        left: 0;
        background-color: transparent;
      }

    }
  }



`;

export default MenuItem;