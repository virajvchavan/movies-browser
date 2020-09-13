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

  const addMovieToTheList = (movieId) => {
    if (savedMovieIds.indexOf(movieId) === -1) {
      setSavedMovieIds(savedMovieIds => savedMovieIds.concat(movieId));
    }
  }

  const removeMovieFromTheList = (movieId) => {
    setSavedMovieIds(savedMovieIds => savedMovieIds.filter((value) => value != movieId));
  }

  return (
    <div className="App container">
        <h1>Movie List</h1>
        <MyList movies={movies} savedMovieIds={savedMovieIds} removeMovieFromTheList={removeMovieFromTheList}  />
        {categories.map((category, index) => {
          return (
            <CategoryRow
              category={category}
              key={index}
              storeMovies={storeMovies}
              addMovieToTheList={addMovieToTheList}
              movies={movies}
              savedMovieIds={savedMovieIds}
            />
          )
        })}
    </div>
  );
}

export default App;
