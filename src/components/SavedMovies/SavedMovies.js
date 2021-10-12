import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const cards = [
    {
      "image": "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mstiteli-27.jpg",
      "duration": 137,
      "nameRU": "Мстители"
    },
    {
      "image": "https://pic.rutube.ru/video/6f/8d/6f8da78b42ffb66d69e955a46bf703e1.jpg",
      "duration": 143,
      "nameRU": "Трансформеры"
    },
    {
      "image": "https://proprikol.ru/wp-content/uploads/2020/09/kartinki-mstiteli-27.jpg",
      "duration": 137,
      "nameRU": "МстителиМстителиМстителиМстители"
    },
    {
      "image": "https://pic.rutube.ru/video/6f/8d/6f8da78b42ffb66d69e955a46bf703e1.jpg",
      "duration": 143,
      "nameRU": "ТрансформерыТрансформерыТрансформеры"
    }
  ]
  return (
    <div className="saved-movies">
      <Header isAuth={true} />
      <SearchForm />
      <MoviesCardList isSaved={true} cards={cards} />
      <Footer />
    </div>
  );
}

export default SavedMovies;
