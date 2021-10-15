import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <div className="saved-movies">
      <Header isAuth={true} />
      <SearchForm handleSubmit={props.handleSubmit} />
      {props.movies === 'NotFound' ? (
        <p className="movies__found-error">Ничего не найдено</p>
      ) : null}
      <MoviesCardList {...props} isSaved />
      <Footer />
    </div>
  );
}

export default SavedMovies;
