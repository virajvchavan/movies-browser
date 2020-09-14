import React from "react";
import MoviesRow from './MoviesRow';

function MyList (props) {
    const { movies, savedMovieIds, removeMovieFromTheList } = props;
    return Object.keys(movies).length > 1 ? (
        <div className="category-row">
            <h2 className="is-size-3">Saved movies</h2>
            {savedMovieIds.length > 0 ? (
                <MoviesRow movieIds={savedMovieIds} movies={movies} removeMovieFromTheList={removeMovieFromTheList} savedMovieIds={savedMovieIds} />
            ): (
                <p>Nothing here! Scroll to discover more</p>
            )}
        </div>
    ) : null;
}

export default MyList;
