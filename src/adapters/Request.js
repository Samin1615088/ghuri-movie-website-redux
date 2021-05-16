// test api key .. must be stored in process.env
const API_KEY = "f5e49a8aafcdedbecc2bba95c2ecf6c3";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default request;
