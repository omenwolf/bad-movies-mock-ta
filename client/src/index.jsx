import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false,
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    // this.saveMovie = this.saveMovie.bind(this);
    // this.deleteMovie = this.deleteMovie.bind(this);
    // this.swapFavorites = this.swapFavorites.bind(this);
  }

  getMovies() {
    // make an axios request to your server on the GET SEARCH endpoint
    axios.get('/search')
      .then((response) => {
        console.log(response)
        this.setState(response.movies)
      })
      .catch((error)=>{
        console.log(error)
      })

  }

  saveMovie() {
    // same as above but do something diff
    // axios.get('/saveMovie', () => {})
  }

  deleteMovie() {
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} movieData={this.getMovies}/>

          {/* implementation of passing props to the rest of the list items in the Movies.jsx file */}
          {/* {props.map((showFaves, favorites, movies)=>{
            return <Movies movies={showFaves ? favorites : movies} showFaves={showFaves}/>
          })} */}
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));