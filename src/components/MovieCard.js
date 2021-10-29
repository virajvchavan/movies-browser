import React from "react";
import * as Constants from './../constants.js';

const truncateText = (input, size) => input.length > size ? `${input.substring(0, size)}...` : input;

function MovieCard (props) {
    const { movie, addMovieToTheList, showDeleteBtn, removeMovieFromTheList} = props;

    const onCardClick = (evt) => {
        addMovieToTheList(movie.id);
    }

    const onRemoveBtnClick = (evt) => {
        removeMovieFromTheList(movie.id);
    }

    return (<div className="card movie-card">
        <header className="card-header">
            <p className="card-header-title">
                {truncateText(movie.title, 15)} <span className="movie_rating">&nbsp;({movie.vote_average || ""}</span>)
            </p>
        </header>
        <div className="card-image">
            <figure className="image">
                <img src={Constants.IMG_ENDPOINT + movie.poster_path} alt="Placeholder" />
            </figure>
        </div>

        {!showDeleteBtn ? (
            <div className="cardOverlay hidden" onClick={onCardClick}>
                {truncateText(movie.overview, 160)}
                <div className="button is-success">Add to list</div>
            </div>
        ): (
            <div className="cardOverlay hidden">
                {truncateText(movie.overview, 160)}
                <div className="button is-danger" onClick={onRemoveBtnClick}>Remove from list</div>
            </div>
        )}
    </div>);
}

export default MovieCard;
