import React from "react";

const IMG_ENDPOINT = "https://image.tmdb.org/t/p/w500";

function MovieCard (props) {
    const { movie } = props;
    return (<div className="card movie-card">
        <header className="card-header">
            <p className="card-header-title">
                {movie.title}
            </p>
        </header>
        <div className="card-image">
            <figure className="image">
                <img src={IMG_ENDPOINT + movie.poster_path} alt="Placeholder image" />
            </figure>
        </div>
    </div>);
}

export default MovieCard;
