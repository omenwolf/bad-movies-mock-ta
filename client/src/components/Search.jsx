import React from 'react';
import Axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
  }
  componentDidMount(){

  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    Axios('/genres')
      .then((response) => {
        console.log(response)
        this.setState({genres: response})
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <select>
          {this.state.genres.map((genre)=>{
            return <option value={genre.id}>{this.state.genres.name}</option>
          })}
     
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;