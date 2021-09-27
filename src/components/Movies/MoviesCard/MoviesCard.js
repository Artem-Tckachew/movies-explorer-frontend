import './MoviesCard.css';
import React from 'react';
function MoviesCard(props) {
	const [isLiked, setIsLiked] = React.useState(false)
	function handleLikeClick() {
		setIsLiked(!isLiked);
	}

	return (
		<li className="card">
			<img className="card__pic" alt={props.card.nameRU} src={props.card.image} />
			<div className="card__info">
				<div className="card__like-container">
					<h2 className="card__title">{props.card.nameRU}</h2>
					<button onClick={handleLikeClick} className={`card__like ${isLiked?'card__like_active':''} ${!props.isSaved?'':'card__like_hidden'}`} aria-label="Нравится" type="button"></button>
					<button className={`card__delete-button ${props.isSaved?'':'card__delete-button_hidden'}`} aria-label="Удалить" type="button"></button>
				</div>
				<p className="card__duration">{(props.card.duration - (props.card.duration % 60))/60}ч {props.card.duration % 60}м</p>
			</div>
			
		</li>
	)
}

export default MoviesCard;
