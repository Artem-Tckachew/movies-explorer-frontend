import '../../index.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="page">
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
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );

}

export default App;
