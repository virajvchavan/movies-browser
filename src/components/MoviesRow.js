import React, { useEffect } from "react";
import * as Constants from '../constants.js';

function MoviesRow (props) {
    const { movies } = props;
    return (
        <>
        {movies.map((movie, index) => {
            return <p key={index}>{movie.title}</p>
        })}
       </>
    )
}

export default MoviesRow;
