import axios from "axios";
import * as Types from "../types";

const API_KEY = '52b7d8d3b8ff8efdcc49fd42d9ff59bc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNeftlixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NEFTLIX_ORIGINALS, payload: result.data.results})
    } catch (error) {
        console.log('Get Neftlix Api error: ', error);
    }
}
export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get top rated Api error: ', error);
    }
}
export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type: Types.GET_HORROR_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get Horror Api error: ', error);
    }
}
export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type: Types.GET_ROMANCE_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get Romance Api error: ', error);
    }
}
export const getAnimeMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&without_genres=1023`
        );
        dispatch({type: Types.GET_ANIME_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get Romance Api error: ', error);
    }
}

export const setMovieDetail = (movie) => dispatch => {
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})

}

export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        );
        dispatch({type: Types.GET_MOVIE_BY_NAME, payload: result.data.results[0]})
    } catch (error) {
        console.log('Get search Movies error: ', error);
    }
}

export const getSearchMovieByName = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        );
        dispatch({type: Types.GET_SEARCH_MOVIES_BY_NAME, payload: result.data.results})
    } catch (error) {
        console.log('Get search Movies error: ', error);
    }
}

export const getMovieSimilar = () => async dispatch => {
    await axios.get(`${BASE_URL}/movie/297762/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            dispatch({type: Types.GET_MOVIES_SIMILAR, payload: res.data.results})
        })
        .catch((error) => console.log("Get countries api error" + error))
}

// export const testMovies = () => async dispatch => {
//     await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&without_genres=1023`)
//         .then(res => {
//             dispatch({type: Types.GET_MOVIES, payload: res.data.results})
//         })
//         .catch((error) => console.log("Get countries api error" + error))
// }

