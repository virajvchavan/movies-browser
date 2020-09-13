import React, { useEffect } from "react";
import MovieCard from "./MovieCard.js";

function MoviesRow (props) {
    const { movies } = props;
    return (
        <div className="movies_row columns">
            {movies.map((movie, index) => {
                return (
                    <MovieCard movie={movie} key={index} />
                )
            })}
       </div> 
    )
}

export default MoviesRow;
