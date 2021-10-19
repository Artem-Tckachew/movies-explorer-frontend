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
  deleteMovie,
}) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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

  const onMoreButtonClick = () => {
    setFilteredMovies(
      movies.slice(0, (filteredMovies.length += moviesCount().more))
    );
  };

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
                  deleteMovie={deleteMovie} />
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
