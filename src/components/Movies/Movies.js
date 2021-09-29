import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'

function Movies() {
	const [isLoading, setIsLoading] = React.useState(true);
	setTimeout(()=>{setIsLoading(false)}, 3000)
	const cards = [
		{
			"image" : "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mstiteli-27.jpg", 
			"duration": 137,
			"nameRU": "Мстители"
		},
		{
			"image" : "https://pic.rutube.ru/video/6f/8d/6f8da78b42ffb66d69e955a46bf703e1.jpg", 
			"duration": 143,
			"nameRU": "Трансформеры"
		},
		{
			"image" : "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mstiteli-27.jpg", 
			"duration": 137,
			"nameRU": "МстителиМстителиМстителиМстители"
		},
		{
			"image" : "https://pic.rutube.ru/video/6f/8d/6f8da78b42ffb66d69e955a46bf703e1.jpg", 
			"duration": 143,
			"nameRU": "ТрансформерыТрансформерыТрансформеры"
		}
	]

  return (
    <div className="movies">
			<SearchForm/>
			{!isLoading?
			(<MoviesCardList isSaved={false} cards={cards} />):
			(<Preloader/>)}
    </div>
  );
}

export default Movies;