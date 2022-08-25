import React, {useEffect} from 'react';
import DetailMovie from "./DetailMovie";
import MovieRow from "../movies/MovieRow";
import {useDispatch, useSelector} from "react-redux";
import * as ACTIONS from "../../store/action";

function DetailContent(props) {
    const dispatch = useDispatch();
    const {
        TopRateMovies,
        MoviesSimilar,

    } = useSelector(state => state.infoMovies);

    useEffect(() => {

        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getMovieSimilar());

    }, [dispatch]);

    return (
        <div>
            <DetailMovie/>
            <MovieRow title='Đang nổi bật' movies={MoviesSimilar}/>

        </div>
    );
}

export default DetailContent;
