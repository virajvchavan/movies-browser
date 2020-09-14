import React, { useEffect, useState } from "react";
import MoviesRow from './MoviesRow';
import { fetchMoviesForACategory } from "../apis/ImdbApiUtils.js";

function CategoriesRow (props) {
    const { category, storeMovies, movies, addMovieToTheList, savedMovieIds, removeMovieFromTheList } = props;
    const [movieIds, setMovieIds] = useState([]);
    const [apiPage, setApiPage] = useState(1);

    useEffect(() => {
      fetchMoviesForACategory(category.id, apiPage).then(result => {
        if(result.length > 0) {
          storeMovies(result);
          setMovieIds(movieIds.concat(result.map((item) => item.id)));
        }
      });
    }, [apiPage]);

    const fetchMoreMovies = () => {
      setApiPage(apiPage => apiPage + 1);
    }

    return (
        <div className="category-row">
            <h2 className="is-size-3">{category.name}</h2>
            <MoviesRow
              movieIds={movieIds}
              movies={movies}
              addMovieToTheList={addMovieToTheList}
              removeMovieFromTheList={removeMovieFromTheList}
              savedMovieIds={savedMovieIds}
              showFetchModeBtn={true}
              fetchMoreMovies={fetchMoreMovies}
            />
        </div>
    )
}

export default CategoriesRow;
