import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from './Preloader/Preloader'

function Movies(props) {

  return (
    <>
      <Header isLoggedIn="true" />
      <div className="movies">
        <SearchForm handleSubmit={props.handleSubmit} handleChangeRadio={props.handleChangeRadio} setIsContentReady={props.setIsContentReady} />
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
      </div>
      <Footer />
    </>
  );
}

export default Movies;
