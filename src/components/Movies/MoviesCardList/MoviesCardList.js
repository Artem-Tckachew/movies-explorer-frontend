import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
  return (
    <section className="movies">
			<ul className="movies__list">
				{props.cards.map((card, index) => { 
					return (
					<MoviesCard isSaved={props.isSaved} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} onCardClick={props.onCardClick} key={index} card={card} />
				)
				})}
			</ul>
			<button className="movies__more-button">Ещё</button>
		</section>
  );
}

export default MoviesCardList;