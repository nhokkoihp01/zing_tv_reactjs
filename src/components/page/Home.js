import React, {useEffect} from 'react';
import Header from "../header/Header";
import Content from "../content/Content";
import {useSelector} from "react-redux";



function Home(props) {
    return (
        <div>
            <Content/>
        </div>
    );
}

export default Home;