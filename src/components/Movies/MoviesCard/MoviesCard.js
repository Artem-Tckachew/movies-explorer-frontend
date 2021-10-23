import './MoviesCard.css';
import { HourDuration } from '../../../utils/constans';
import React from 'react';

function MoviesCard({ movie, savedMoviesId, isSaved, deleteMovie, handleSaveMovie }) {
  const handleIsLike = (card, savedCardsId) => {
    if (card.id) {
      return savedCardsId.some((el) => el === card.id);
    }
  };


  const isLiked = handleIsLike(movie, savedMoviesId);
  const hours = Math.trunc(movie.duration / HourDuration);
  const minutes = movie.duration % HourDuration;
  const time = `${hours > 0 ? `${hours}ч ` : ''}${minutes > 0 ? `${minutes}м` : ''
    }`;
  const trailer = `${isSaved ? movie.trailer : movie.trailerLink}`;

  function handleSave() {
    if (isSaved) {
      deleteMovie(movie);
    } else if (isLiked) {
      deleteMovie(movie);
    } else {
      handleSaveMovie(movie);
    }
  }

  return (
    <li className="card">
      <div className="card__info">
        <div className="card__save-container">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__duration">{time}</p>
        </div>
        <button onClick={handleSave} className={`card__save ${isLiked || isSaved ? 'card__save_active' : ''} ${!isSaved ? '' : 'card__save_hidden'}`} aria-label="Нравится" type="button"></button>
        <button onClick={handleSave} className={`card__delete-button ${isSaved ? '' : 'card__delete-button_hidden'}`} aria-label="Удалить" type="button"></button>
      </div>
      <a
        // className="movies__image"
        href={trailer.startsWith('https') ? trailer : 'https://www.youtube.com'}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__img" src={
            isSaved
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={movie.name}
        />
      </a>
    </li>

  )
}

export default MoviesCard;
