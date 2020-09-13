import React from "react";
import MoviesRow from './MoviesRow';

function MyList (props) {
    const { movies, savedMovieIds, removeMovieFromTheList } = props;
    return (
        <div className="category-row">
            <h2 className="is-size-3">Saved movies</h2>
            <MoviesRow movieIds={savedMovieIds} movies={movies} removeMovieFromTheList={removeMovieFromTheList} showDeleteBtn={true} />
        </div>
    )
}

export default MyList;
