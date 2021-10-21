import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <>
      <Header isLoggedIn="true" />
      <div className="saved-movies">
        <SearchForm handleSubmit={props.handleSubmit} handleChangeRadio={props.handleChangeRadio} />
        {props.movies === 'NotFound' ? (
          <p className="movies__found-error">Ничего не найдено</p>
        ) : null}
        <MoviesCardList {...props} isSaved />
      </div>
      <Footer />
    </>
  );
}

export default SavedMovies;
