import '../../index.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound'
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import * as  MainApi from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [requestError, setRequestError] = useState('');

  const history = useHistory();

  useEffect(() => {
    MainApi.getUser().then((res) => {
      setCurrentUser(res);
      setIsLoggedIn(true)})
      .catch((res) => console.log(res))
  }, [isLoggedIn])

  function onLogin() {
    setIsLoggedIn(!isLoggedIn)
  }

  function handleSignIn(data) {
    const { email, password } = data;
    MainApi.signIn(email, password).then((res) => {
      if (res.token) {
        onLogin();
        history.push('/movies')
      }
    })
      .catch(err => {
        if (err === 401 || err === 400) {
          setRequestError('Неверный логин или пароль')
        } else {
          setRequestError('Сервер отдыхает')
        }
      })
  }


  function handleSignUp(data) {
    const { email, name, password } = data;
    MainApi.signUp(email, password, name).then((res) => {
      handleSignIn({ email, password });
    }
    )
      .catch(err => {
        if (err === 409 || err === 401 || err === 400) {
          setRequestError('Пользователь с таким email уже зарегестрирован')
        } else {
          setRequestError('Сервер отдыхает')
          console.log(err)
        }
      });
  }

  function handleSignOut() {
    MainApi.signOut()
      .then(() => {
        onLogin();
        setRequestError('');
        history.push('/');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header isAuth={false} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            component={Movies}
            path="/movies"
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            component={SavedMovies}
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            component={Profile}
            path="/profile"
            onSignOut={handleSignOut}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Route path="/signup">
            <Register setRequestError={setRequestError} requestError={requestError} onSubmit={handleSignUp}/>
          </Route>
          <Route path="/signin">
            <Login setRequestError={setRequestError} requestError={requestError} onLoginSubmit={handleSignIn}/>
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
