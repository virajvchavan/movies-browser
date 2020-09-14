import React, { useEffect } from "react";
import MovieCard from "./MovieCard.js";

function MoviesRow (props) {
    const { movies, movieIds, addMovieToTheList, showDeleteBtn, removeMovieFromTheList } = props;
    
    return (
        <div className="movies_row columns">
            {movieIds.map((movieId, index) => {
                let movie = movies[movieId];
                return movie ? (
                    <MovieCard movie={movies[movieId]} key={index} addMovieToTheList={addMovieToTheList} showDeleteBtn={showDeleteBtn} removeMovieFromTheList={removeMovieFromTheList} />
                ) : null;
            })}
       </div> 
    )
}

export default MoviesRow;
