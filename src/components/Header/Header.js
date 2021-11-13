import './Header.css';
import { NavLink, Link, useLocation } from "react-router-dom";
import React from 'react';

function Header({ isLoggedIn }) {
  const [popupOpened, setPopupOpened] = React.useState(false)
  function handleOpenMenu() {
    setPopupOpened(!popupOpened)
  }

  let location = useLocation();

  return (
      <header
        className={`${location.pathname === "/" ? "header header_type_promo navtab" : "header"}`}>
        {isLoggedIn && (
          <nav className="header__container">
            <Link to="/" className="header__logo"></Link>
            <div className="header__links">
              <NavLink to="/movies" activeClassName="header__link_active" className="header__link">Фильмы</NavLink>
              <NavLink to="/saved-movies" activeClassName="header__link_active" className="header__link">Сохраненные фильмы</NavLink>
            </div>
            <div className="header__accaunt-container">
              <Link to="/profile" className="header__profile-link header__profile-link_screen_full">Аккаунт<span className="header__profile-img header__profile-img_screen_full"></span></Link>
              <button className="header__burger" onClick={handleOpenMenu}></button>
            </div>
          </nav>
        )}
        <div className={`header__popup ${popupOpened ? '' : 'header__popup_closed'}`}>
          <nav className="header__menu">
            <button className="header__close-button" onClick={handleOpenMenu}></button>
            <div className="header__links-container">
              <NavLink exact to="/" activeClassName="header__link_active" className="header__link">Главная</NavLink>
              <NavLink to="/movies" activeClassName="header__link_active" className="header__link" onClick={handleOpenMenu}>Фильмы</NavLink>
              <NavLink to="/saved-movies" activeClassName="header__link_active" className="header__link" onClick={handleOpenMenu}>Сохраненные фильмы</NavLink>
            </div>
            <Link to="/profile" className="header__profile-link" onClick={handleOpenMenu}>Аккаунт<span className="header__profile-img"></span></Link>
          </nav>
        </div>
        {!isLoggedIn && (
          <nav className="header__container">
            <Link to="/" className="header__logo header__logo_type_promo"></Link>
            <Link to="/signup" className="header__register">Регистрация</Link>
            <Link to="/signin" className="header__entry">Войти</Link>
          </nav>
        )}
      </header>
  )
}

export default Header;
