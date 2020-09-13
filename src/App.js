import React, { useEffect, useState } from 'react';
import MyList from './components/MyList';
import './bulma.css';
import './App.css';
import CategoryRow from './components/CategoryRow';
import * as Constants from './constants.js';

function App() {
  const [categories, setCategories] = useState([]);
  const [savedMovieIds, setSavedMovieIds] = useState([]);
  const [movies, setMovies] = useState({});

  const storeMovies = (moviesJson) => {
    let movies_temp = movies;
    moviesJson.forEach(item => {
      movies_temp[item.id] = item;
    });
    setMovies(movies_temp);
  }

  useEffect(() => {
    async function getCategories() {
      let response = await fetch(Constants.IMDB_ENDPINT + "genre/movie/list?api_key=" + Constants.API_KEY);
      if (response.status === 200) {
        let categoriesJson = await response.json();
        if (categoriesJson.genres && categoriesJson.genres.length > 0) {
          setCategories(categoriesJson.genres);
        }
      }
    }
    getCategories();
  }, []);

  return (
    <div className="App container">
        <h1>Movie List</h1>
        <MyList setSavedMovieIds={setSavedMovieIds} />
        {categories.map((category, index) => {
          return (
            <CategoryRow
              category={category}
              key={index}
              storeMovies={storeMovies}
              setSavedMovieIds={setSavedMovieIds}
              movies={movies}
            />
          )
        })}
    </div>
  );
}

export default App;
