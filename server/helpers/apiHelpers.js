const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org
// checking the data object returned from 3rd party server
// axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
//   .then((response) => {
//     // console.log(response.data.genres)
//     // console.log(response.data.title)
//     console.log(response.data);
//     return response.data
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// filtering out movie titles & genre id's & img
// axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&vote_count.gte=100`)
//   .then((response) => {
//     // console.log(response.data.genres)
//     // console.log(response.data.title)
//     console.log(response.data.results.map(({title, genre_ids, poster_path, release_date, vote_average}) => {
//       return {movies: title, genre: genre_ids, 
//         img: poster_path, release: release_date, 
//         score: vote_average}
//     }));
//     return response.data
//   })
//   .catch((error) => {
//     console.log(error)
//   })


// axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
//   .then((response) => {
//     console.log(response.data.genres.map(({id, name}) => {
//       return {id: id, genre: name}
//     }));
//     return response.data
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {
  
}