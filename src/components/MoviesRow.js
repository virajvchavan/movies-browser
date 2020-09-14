import React from "react";
import MovieCard from "./MovieCard.js";

function MoviesRow (props) {
    const { movies, movieIds, addMovieToTheList, removeMovieFromTheList, savedMovieIds, showFetchModeBtn, fetchMoreMovies } = props;
    
    return (
        <div className="movies_row columns">
            {movieIds.map((movieId, index) => {
                let movie = movies[movieId];
                let showDeleteBtn = savedMovieIds && savedMovieIds.indexOf(`${movieId}`) > -1;
                return movie ? (
                    <MovieCard movie={movies[movieId]} key={index} addMovieToTheList={addMovieToTheList} showDeleteBtn={showDeleteBtn} removeMovieFromTheList={removeMovieFromTheList} />
                ) : null;
            })}
            {Object.keys(movieIds).length > 1 && showFetchModeBtn ? (
                <div className="card">
                    <div className="fetchMoreCard">
                        <div className="button is-success" onClick={fetchMoreMovies}>Fetch more</div>
                    </div>
                </div>
            ): null}
       </div> 
    )
}

export default MoviesRow;
