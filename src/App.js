import React, { useEffect, useState } from 'react';
import MyList from './components/MyList';
import './bulma.css';
import './App.css';
import CategoryRow from './components/CategoryRow';
import * as Constants from './constants.js';

function App() {
  const [categories, setCategories] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

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
    <div className="App">
        <h1>Movie List</h1>
        <MyList setSavedMovies={setSavedMovies} />
        {categories.map((category, index) => {
          return (
            <CategoryRow category={category} key={index} setSavedMovies={setSavedMovies} />
          )
        })}
    </div>
  );
}

export default App;
