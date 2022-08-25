import React, {useEffect, useState} from 'react';
import SliderSlick from "./slider/SliderSlick";
import MoviesTwoRow from "./movies/MoviesTwoRow";
import MovieRow from "./movies/MovieRow";
import Partner from "./partner/Partner";
import * as ACTIONS from "../store/action";
import {useDispatch, useSelector} from "react-redux";
import {getNeftlixOriginals} from "../store/action";
import BackTop from "./back_top/BackTop";


function Content(props) {
    const dispatch = useDispatch();
    const {
        NeftlixOriginals,
        TopRateMovies,
        RomanceMovies,
        HorrorMovies,
        AnimeMovies,


    } = useSelector(state => state.infoMovies);


    useEffect(() => {
        dispatch(ACTIONS.getNeftlixOriginals());

        dispatch(ACTIONS.getTopRatedMovies());

        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getAnimeMovies());


    }, [dispatch]);


    return (
        <div>

            <SliderSlick/>
            <MoviesTwoRow movies={TopRateMovies} title="Nổi bật trong ngày"/>
            <MovieRow movies={HorrorMovies} title="OAN GIA NGÕ HẸP"/>
            <MovieRow movies={RomanceMovies} title="KHI TÌNH YÊU NỞ RỘ"/>
            <MovieRow movies={AnimeMovies} title="Cho tôi xin một vé đi tuổi thơ"/>
            <Partner/>
            <BackTop/>


        </div>
    );
}

{
}
export default Content;
