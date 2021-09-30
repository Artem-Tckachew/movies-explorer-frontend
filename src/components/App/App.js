import '../../index.css';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound'
const loggedIn = true;

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exat path='/'>
          <Header isAuth={false} />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header isAuthed={true} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header isAuthed={true} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header isAuthed={true} />
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        <Route path="/">
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
