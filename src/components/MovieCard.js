import React from "react";
import * as Constants from './../constants.js';

const truncate = (input, size) => input.length > size ? `${input.substring(0, size)}...` : input;

function MovieCard (props) {
    const { movie, addMovieToTheList, showDeleteBtn, removeMovieFromTheList} = props;

    const onCardClick = (evt) => {
        if (!showDeleteBtn) {
            addMovieToTheList(movie.id);
        }
    }

    const onRemoveBtnClick = (evt) => {
        removeMovieFromTheList(movie.id);
    }

    return (<div className="card movie-card" onClick={onCardClick}>
        <header className="card-header">
            <p className="card-header-title">
                {truncate(movie.title, 18)}
            </p>
        </header>
        <div className="card-image">
            <figure className="image">
                <img src={Constants.IMG_ENDPOINT + movie.poster_path} alt="Placeholder image" />
            </figure>
        </div>
        {!showDeleteBtn ? (
            <div className="cardOverlay hidden">
                {truncate(movie.overview, 150)}
                <div className="button is-success">Add to list</div>
            </div>
        ): (
            <div className="cardOverlay hidden" onClick={onRemoveBtnClick}>
                {truncate(movie.overview, 150)}
                <div className="button is-danger">Remove from list</div>
            </div>
        )}
    </div>);
}

export default MovieCard;
