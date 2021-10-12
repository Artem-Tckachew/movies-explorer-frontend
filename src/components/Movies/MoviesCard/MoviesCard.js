import './MoviesCard.css';
import React from 'react';
function MoviesCard(props) {
  const [isSaved, setIsSaved] = React.useState(false)
  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <li className="card">
      <div className="card__info">
        <div className="card__save-container">
          <h2 className="card__title">{props.card.nameRU}</h2>
          <p className="card__duration">{(props.card.duration - (props.card.duration % 60)) / 60}ч {props.card.duration % 60}м</p>
        </div>
        <button onClick={handleSaveClick} className={`card__save ${isSaved ? 'card__save_active' : ''} ${!props.isSaved ? '' : 'card__save_hidden'}`} aria-label="Нравится" type="button"></button>
        <button className={`card__delete-button ${props.isSaved ? '' : 'card__delete-button_hidden'}`} aria-label="Удалить" type="button"></button>
      </div>
      <img className="card__img" alt={props.card.nameRU} src={props.card.image} />
    </li>
  )
}

export default MoviesCard;
