import React, { useEffect, useState } from "react";
import MoviesRow from './MoviesRow';
import { fetchMoviesForACategory } from "../apis/ImdbApiUtils.js";

function CategoriesRow (props) {
    const { category, storeMovies, movies, addMovieToTheList, savedMovieIds } = props;
    const [movieIds, setMovieIds] = useState([]);
    useEffect(() => {
      fetchMoviesForACategory(category.id).then(result => {
        if(result.length > 0) {
          storeMovies(result);
          setMovieIds(result.map((item) => item.id));
        }
      });
    }, []);
    return (
        <div className="category-row">
            <h2 className="is-size-3">{category.name}</h2>
            <MoviesRow movieIds={movieIds} movies={movies} addMovieToTheList={addMovieToTheList} savedMovieIds={savedMovieIds} />
        </div>
    )
}

export default CategoriesRow;
