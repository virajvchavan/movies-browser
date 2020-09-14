import React from "react";
import MovieCard from "./MovieCard.js";

function MoviesRow (props) {
    const { movies, movieIds, addMovieToTheList, removeMovieFromTheList, savedMovieIds } = props;
    
    return (
        <div className="movies_row columns">
            {movieIds.map((movieId, index) => {
                let movie = movies[movieId];
                let showDeleteBtn = savedMovieIds && savedMovieIds.indexOf(`${movieId}`) > -1;
                return movie ? (
                    <MovieCard movie={movies[movieId]} key={index} addMovieToTheList={addMovieToTheList} showDeleteBtn={showDeleteBtn} removeMovieFromTheList={removeMovieFromTheList} />
                ) : null;
            })}
       </div> 
    )
}

export default MoviesRow;
