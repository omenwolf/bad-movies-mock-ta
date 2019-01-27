var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
const { API_KEY } = require('../config.js');
var app = express();

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup

// npm run react-dev
// npm run server-dev

//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes

app.get('/genres', function(req, res) {
  // make an axios request to get the official list of genres from themoviedb
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then((response)=> {
      // send back
      res.send(response.data)  //figure out the object data layout to get the exact list of genres
      // return response.data
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send();
    })
    // use this endpoint. you will need your API key from signup: https://api.themoviedb.org/3/genre/movie/list
    
  });
  
  app.get('/search', function(req, res) {
    // use this endpoint to search for movies by genres (using API key): https://api.themoviedb.org/3/discover/movie
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1`)
    .then((response) => {
      res.send(response.result)
    })
    .catch((error) => {
      console.log(error);
    res.status(404).send('sorry, cannot search that');
  })
  // and sort them by votes (worst first) using the search parameters in themoviedb API
});


app.post('/save', function(req, res) {

  //save movie as favorite

});

app.post('/delete', function(req, res) {

  //remove movie from favorites

});


//OPTION 2: Use Express Router

//IF you decide to go with this option, delete OPTION 1 to continue

//Routes

const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
