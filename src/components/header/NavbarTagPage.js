import React from 'react';
import styled from "styled-components";

function NavbarTagPage(props) {
    return (
        <TagPage>
            <li className="tag__page-item active">
                <a className="tag__page-link " href="">TV</a>
            </li>
            <li className="tag__page-item">
                <a className="tag__page-link " href="">MP3</a>
            </li>
            <li className="tag__page-item">
                <a className="tag__page-link " href="">News</a>
            </li>

        </TagPage>
    );
}
const TagPage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
  @media only screen and (max-width: 1010px) {
    display: none;
  }

  .tag__page-item {
    display: flex;
    align-items: center;
    height: 100%;
    list-style: none;
    &.active {
      color: var(--primary-color);
      background-color: black;

    }
    &:first-child{
      margin-left: 20px;
    }

    :hover {
    }

    .tag__page-link {
      color: var(--while-color);
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      padding: 0px 12px;
      text-transform: uppercase;

    

      :hover {
        color: var(--primary-color);
      }
    }
  }


`;

export default NavbarTagPage;