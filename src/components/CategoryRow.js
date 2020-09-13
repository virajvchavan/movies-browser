import React, { useEffect, useState } from "react";
import * as Constants from '../constants.js';
import MoviesRow from './MoviesRow';

function CategoriesRow (props) {
    const { category } = props;
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            let response = await fetch(Constants.IMDB_ENDPINT + "discover/movie?api_key=" + Constants.API_KEY + "&with_genres=" + category.id);
            if (response.status === 200) {
              let moviesJson = await response.json();
              if(moviesJson.results && moviesJson.results.length > 0) {
                setMovies(moviesJson.results);
              }
            }
          }
          getMovies();
    }, []);
    return (
        <>
            <h2 className="is-size-3">{category.name}</h2>
            <MoviesRow movies={movies} />
        </>
    )
}

export default CategoriesRow;