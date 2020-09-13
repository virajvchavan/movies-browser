import React from "react";

const IMG_ENDPOINT = "https://image.tmdb.org/t/p/w500";

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
                <img src={IMG_ENDPOINT + movie.poster_path} alt="Placeholder image" />
            </figure>
        </div>
        {!showDeleteBtn ? (
            <div className="addBtn hidden">
                Add to list
            </div>
        ): (
            <div className="removeBtn hidden" onClick={onRemoveBtnClick}>
                Remove from list
            </div>
        )}
    </div>);
}

export default MovieCard;
