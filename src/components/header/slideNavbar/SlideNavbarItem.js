import React from 'react';
import {TbUser} from "react-icons/tb";

function SlideNavbarItem(props) {
    const {Icon,title} = props;
    return (
        <li className="slide__navbar-link">
            <Icon/>
            <a href="">{title}</a>
        </li>
    );
}

export default SlideNavbarItem;