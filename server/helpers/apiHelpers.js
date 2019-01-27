const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org
// checking the data object returned from 3rd party server
axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
  .then((response) => {
    // console.log(response.data.genres)
    // console.log(response.data.title)
    console.log(response.data);
    return response.data
  })
  .catch((error) => {
    console.log(error)
  })

  // /discover/movie?with_genres=18&sort_by=vote_average.asec&vote_count.gte=10

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {
  
}