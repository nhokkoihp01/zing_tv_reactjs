import * as Types from '../types';

const reducerMoviesInitialState = {
    movies:[],
    NeftlixOriginals: null,
    TopRateMovies: null,
    RomanceMovies:null,
    HorrorMovies:null,
    AnimeMovies:null,
    TestMovies:null,
    DetailMovie: null,
    Movie:null,
    GetListMovieByName:null,
    MoviesSimilar:null,



}
const reducerMovies = (state = reducerMoviesInitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case Types.GET_NEFTLIX_ORIGINALS:
            // console.log(payload)
            return {...state, NeftlixOriginals: payload}
        case Types.GET_TOP_RATED_MOVIES:
            // console.log(payload)
            return {...state, TopRateMovies: payload}
        case Types.GET_ROMANCE_MOVIES:
            // console.log(payload)
            return {...state, RomanceMovies: payload}
        case Types.GET_HORROR_MOVIES:
            // console.log(payload)
            return {...state, HorrorMovies: payload}
        case Types.GET_ANIME_MOVIES:
            // console.log(payload)
            return {...state, AnimeMovies: payload}
        case Types.SET_MOVIE_DETAIL:
            // console.log(payload)
            return {...state, DetailMovie: payload}
        case Types.GET_MOVIE_BY_NAME:
            // console.log(payload)
            return {...state, Movie: payload}
        case Types.GET_SEARCH_MOVIES_BY_NAME:
            // console.log(payload)
            return {...state, GetListMovieByName: payload}
        case Types.GET_MOVIES_SIMILAR:
            // console.log(payload)
            return {...state, MoviesSimilar: payload}


        default:
            return state
    }
}
export default reducerMovies;