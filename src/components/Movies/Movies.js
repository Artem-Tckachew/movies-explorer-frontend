import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Preloader from './Preloader/Preloader'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {

  return (
    <div className="movies">
      <Header isAuth={true} />
      <SearchForm handleSubmit={props.handleSubmit} />
      {props.isLoading ? <Preloader /> : null}
      {props.isNotFound ? (
        <p className="movies__found-error">Ничего не найдено</p>
      ) : null}
      {props.isError ? (
        <p className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : null}
      <MoviesCardList isSaved={false} {...props} />
      <Footer />
    </div>
  );
}

export default Movies;
