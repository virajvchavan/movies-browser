import React, { useEffect, useState } from 'react';
import MyList from './components/MyList';
import './bulma.css';
import './App.css';
import CategoryRow from './components/CategoryRow';
import * as Constants from './constants.js';
import MoviesCarousel from './components/MoviesCarousel';

function App() {
  const [categories, setCategories] = useState([]);
  const [savedMovieIds, setSavedMovieIds] = useState([]);
  const [movies, setMovies] = useState({});
  const [carouselImages, setCarouselImages] = useState([]);

  const storeMovies = (moviesJson) => {
    let movies_temp = movies;
    let image_paths = [];
    moviesJson.forEach((item, index) => {
      movies_temp[item.id] = {title: item.title, id: item.id, overview: item.overview, poster_path: item.poster_path};
      if (item.backdrop_path && index < 3) {
        // add 3 images from each category
        image_paths.push(item.backdrop_path);
      }
    });
    setMovies(movies_temp);
    if (carouselImages.length < 15) {
      setCarouselImages((carouselImages) => carouselImages.concat(image_paths));
    }
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

  useEffect(() => {
    if (savedMovieIds.length > 0) {
      window.localStorage.setItem(Constants.SAVED_MOVIES_LS_KEY, JSON.stringify(savedMovieIds));
    }
  }, [savedMovieIds]);

  useEffect(() => {
    let movieIdsFromLS = window.localStorage.getItem(Constants.SAVED_MOVIES_LS_KEY);
    if (movieIdsFromLS) {
      try {
        setSavedMovieIds(JSON.parse(movieIdsFromLS).map(item => `${item}`));
      } catch (error) {
        console.log("Error parsing savedMovieIds from localstorage");
      }
    }
  }, []);

  const addMovieToTheList = (movieId) => {
    if (savedMovieIds.indexOf(`${movieId}`) === -1) {
      setSavedMovieIds(savedMovieIds => savedMovieIds.concat(`${movieId}`));
    }
  }

  const removeMovieFromTheList = (movieId) => {
    setSavedMovieIds(savedMovieIds => savedMovieIds.filter((value) => value != movieId));
  }

  return (
    <div className="App container">
        <MoviesCarousel carouselImages={carouselImages} />
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
