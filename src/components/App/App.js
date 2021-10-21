import '../../index.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as auth from '../../utils/AuthApi';
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound'
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import mainApi from '../../utils/MainApi';
import getMovies from '../../utils/MoviesApi';
import searchMovies from '../../utils/searchMovies';
import { shortDuration } from '../../utils/constans';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;
  const [isOnlyCheckedSearch, setIsOnlyCheckedSearch] = useState(false);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);
  const [savedKeyWord, setSavedKeyWord] = useState('');
  const [isFormSent, setIsFormSent] = useState(false);
  const [isShortSavedFilmChecked, setIsShortSavedFilmChecked] = useState(false);
  const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState('');
  const [isLoginError, setIsLoginError] = useState('');
  const [isProfileUpdateError, setIsProfileUpdateError] = useState('');
  const [isSearchError, setIsSearchError] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState(
    localStorage.getItem('foundMovies')
      ? JSON.parse(localStorage.getItem('foundMovies'))
      : []
  );

  const tokenCheck = React.useCallback(() => {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(moviesData);
          setSavedMoviesId(moviesData.map((movie) => movie.movieId));
          setIsLoggedIn(true);
          if (path === "/profile") {
            history.push('/profile')
          } else if (path === "/movies") {
            history.push('/movies')
          } else if (path === "/saved-movies") {
            history.push('saved-movies')
          }
        })
        .catch((e) => console.log(e));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setIsNotFound(false);
  }, [isLoggedIn]);

  useEffect(() => {
    setIsUpdateSuccessful(false);
  }, [path]);

  const handleSearchSavedMovies = (searchValue) => {
    setIsOnlyCheckedSearch(false);
    if (!searchValue) {
      setIsOnlyCheckedSearch(true);
    }
    setSavedKeyWord(searchValue);
    const movies = searchMovies(
      savedMovies,
      searchValue,
      isShortSavedFilmChecked
    );
    setFoundSavedMovies(movies);
  };

  useEffect(() => {
    if (savedKeyWord) {
      handleSearchSavedMovies(savedKeyWord);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  useEffect(() => {
    if (savedMovies.length || foundSavedMovies.length) {
      handleSearchSavedMovies(savedKeyWord);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShortSavedFilmChecked]);

  const handleSearchMoviesChecked = () => {
    const isShort = isShortFilmChecked;
    const cards = JSON.parse(localStorage.getItem('foundMovies'));
    // eslint-disable-next-line array-callback-return
    const shortCards = cards.filter((movie) => {
      if (isShort) {
        if (movie.duration < shortDuration) {
          return true;
        }
      } else if (movie.duration >= shortDuration) {
        return true;
      }
    });
    setMovies(shortCards);
    setIsNotFound(!shortCards.length);
  };

  useEffect(() => {

    if (localStorage.getItem('foundMovies')) {
      handleSearchMoviesChecked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShortFilmChecked]);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('foundMovies');
      localStorage.removeItem('movies');
      setMovies([]);
      setIsLoggedIn(false);
      setCurrentUser({ email: '', name: '' });
      history.push('/');
    });
  };

  const onRegister = (password, email, name) => {
    auth
      .register(password, email, name)
      .then(() => {
        onLogin(password, email);
      })
      .catch((err) => {
        if (err === 409 || err === 401 || err === 400) {
          setIsRegisterError('Пользователь с таким email уже зарегестрирован');
        } else {
          setIsRegisterError(err)
          console.log(err)
          setIsFormSent(false);
        };
      });
  };

  const handleUpdateUser = (userInfo) => {
    mainApi
      .patchProfileInfo(userInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsUpdateSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
        setIsProfileUpdateError(err);
      })
      .finally(() => {
        setIsFormSent(false);
      });
  };

  const handleSearchMovies = async (searchValue) => {
    setIsSearchError(false);
    setIsSearchLoading(true);
    setIsNotFound(false);
    try {
      // eslint-disable-next-line no-shadow
      let movies = JSON.parse(localStorage.getItem('movies'));
      if (!movies) {
        const films = await getMovies();
        localStorage.setItem('movies', JSON.stringify(films));
        movies = JSON.parse(localStorage.getItem('movies'));
      }
      const cards = searchMovies(movies, searchValue);
      localStorage.setItem('foundMovies', JSON.stringify(cards));
      handleSearchMoviesChecked();
    } catch (err) {
      console.error(err);
      setIsSearchError(true);
    } finally {
      setIsSearchLoading(false);
    }
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((m) => {
        setSavedMoviesId([...savedMoviesId, movie.id]);
        setSavedMovies([...savedMovies, m]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteMovie = (movie) => {
    let movieId = savedMovies.filter(
      (f) => f.movieId === movie.id || f.data?.movieId === movie.id
    )[0];
    if (movieId) {
      movieId = movieId._id || movieId._id;
    }

    mainApi
      .removeMovie(movie.owner ? movie._id : movieId)
      .then((deleted) => {
        setSavedMovies(savedMovies.filter((film) => film._id !== deleted._id));
        setSavedMoviesId(savedMoviesId.filter((id) => id !== deleted.movieId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onLogin = (password, email) => {
    auth
      .authorize(password, email)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        setIsLoginError(err);
      })
      .finally(() => {
        setIsFormSent(false);
      });
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            component={Movies}
            path="/movies"
            isLoggedIn={isLoggedIn}
            movies={movies}
            savedMoviesId={savedMoviesId}
            handleSubmit={handleSearchMovies}
            isLoading={isSearchLoading}
            isError={isSearchError}
            isNotFound={isNotFound}
            handleSaveMovie={handleSaveMovie}
            deleteMovie={deleteMovie}
            handleChangeRadio={setIsShortFilmChecked}
          />
          <ProtectedRoute
            component={SavedMovies}
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            movies={
              // eslint-disable-next-line no-nested-ternary
              savedKeyWord || isOnlyCheckedSearch
                ? foundSavedMovies?.length
                  ? foundSavedMovies
                  : 'NotFound'
                : savedMovies
            }
            deleteMovie={deleteMovie}
            handleSubmit={handleSearchSavedMovies}
            handleChangeRadio={setIsShortSavedFilmChecked}
          />
          <ProtectedRoute
            component={Profile}
            path="/profile"
            isLoggedIn={isLoggedIn}
            handleSignOut={handleSignOut}
            handleUpdateUser={handleUpdateUser}
            isError={isProfileUpdateError}
            setError={setIsProfileUpdateError}
            isSuccess={isUpdateSuccessful}
            isFormSent={isFormSent}
            setIsFormSent={setIsFormSent}
            setSuccess={setIsUpdateSuccessful}
          />
          <Route path='/signup'>
            <Register
              onRegister={onRegister}
              isError={isRegisterError}
              setError={setIsRegisterError}
              isFormSent={isFormSent}
              setIsFormSent={setIsFormSent}
            />
          </Route>
          <Route path='/signin'>
            <Login
              onLogin={onLogin}
              isError={isLoginError}
              setError={setIsLoginError}
              isFormSent={isFormSent}
              setIsFormSent={setIsFormSent}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );

}

export default App;
