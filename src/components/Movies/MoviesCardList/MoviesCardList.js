import { useEffect, useState, useCallback } from 'react';
import './MoviesCardList.css';
import { debounce } from 'lodash';
import MoviesCard from '../MoviesCard/MoviesCard';
import { desktopWidth, tabletWidth, mobileWidth } from '../../../utils/constans';

const MoviesCardList = ({
  movies,
  isSaved,
  handleSaveMovie,
  savedMoviesId,
  deleteMovie
}) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  // eslint-disable-next-line consistent-return
  function moviesCount() {
    if (windowSize >= desktopWidth) return { count: 12, more: 4 };
    if (windowSize >= tabletWidth) return { count: 8, more: 2 };
    if (windowSize >= mobileWidth) return { count: 5, more: 1 };
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handler = useCallback(
    debounce(function () {
      setWindowSize(window.innerWidth);
    }, 500),
    []
  );

  const onChange = () => {
    handler();
  };

  useEffect(() => {
    const newMovies = movies.slice(0, moviesCount().count);
    setFilteredMovies(newMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, windowSize]);

  useEffect(() => {
    window.addEventListener('resize', onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(window.innerWidth >= 1280){
      setFilteredFilms(filteredFilms.splice(0, 12));
    } else if(window.innerWidth >= 768) {
      setFilteredSavedMovies(filteredSavedMovies.splice(0, 8));
      setFilteredFilms(filteredFilms.splice(0, 8));
    } else {
      setFilteredFilms(filteredFilms.splice(0, 5));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onMoreButtonClick() {
    if (window.innerWidth >= 1280) {
      setFilteredFilms(JSON.parse(localStorage.getItem('searchedFilms')).splice(0, filteredFilms.length + 4));
    } else {
      setFilteredFilms(JSON.parse(localStorage.getItem('searchedFilms')).splice(0, filteredFilms.length + 3));
    };
  }

  return (
    <section className="movies-card-list">
      <ul className="movies__list">
        {movies === 'NotFound'
          ? ''
          : movies.reduce((filmsBatch, movie) => {
            if (filmsBatch.length < filteredMovies.length) {
              filmsBatch.push(
                <MoviesCard
                  movie={movie}
                  isSaved={isSaved}
                  key={isSaved ? movie.id : movie._id}
                  handleSaveMovie={handleSaveMovie}
                  savedMoviesId={savedMoviesId}
                  deleteMovie={deleteMovie}
                  />
              );
            }
            return filmsBatch;
          }, [])}
      </ul>
      {movies.length > filteredMovies.length ? (
        <button
          onClick={onMoreButtonClick}
          type="button"
          aria-label="Ещё"
          className="movies__more-button">Ещё</button>
      ) : null}
    </section>
  );
}

export default MoviesCardList;
