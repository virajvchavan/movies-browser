import React from "react";

const IMG_ENDPOINT = "https://image.tmdb.org/t/p/w500";

const truncate = (input, size) => input.length > size ? `${input.substring(0, size)}...` : input;

function MovieCard (props) {
    const { movie } = props;
    return (<div className="card movie-card">
        <header className="card-header">
            <p className="card-header-title">
                {truncate(movie.title, 18)}
            </p>
        </header>
        <div className="card-image">
            <figure className="image">
                <img src={IMG_ENDPOINT + movie.poster_path} alt="Placeholder image" />
            </figure>
        </div>
        <div className="on_hover hidden">
            Add to list
        </div>
    </div>);
}

export default MovieCard;
