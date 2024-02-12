import axios from 'axios'

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key="9db44c3c9d8e581b9ce164714a9373f0"

const movieByGenreById='https://api.themoviedb.org/3/discover/movie?api_key='+api_key;

const trandingVideos= axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

//generate movie by Genre
const getMovieByGenerId=(id)=> axios.get(movieByGenreById+"&with_genres="+id);
// console.log(trandingVideos);
export default {trandingVideos,getMovieByGenerId};
