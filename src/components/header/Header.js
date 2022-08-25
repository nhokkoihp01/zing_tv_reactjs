import React from 'react';
import TopNavbar from "./TopNavbar";
import NavbarMenu from "./NavbarMenu";

function Header(props) {
    return (
        <div>
            <TopNavbar/>
            <NavbarMenu/>

        </div>
    );
}

export default Header;