import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

const isLogged = false;

function Header() {
  return (
    <header className={isLogged ? "header" : "header"}>
      {isLogged ?
        <><nav className="header__content">
          <img src={logo} alt="logo" />
          <li className="header__films">
            <a href="#" className="header__link">Фильмы</a>
            <a href="#" className="header__link">Сохранённые фильмы</a>
          </li>
          <li className="header__accaunt">
            <a href="#" className="header__link">Аккаунт</a>
            <div className="profile__logo"></div>
          </li>
        </nav>
          <div className="profile__logo"></div></>
        : <nav className="header__content">
        <img src={logo} alt="logo" />
        <li className="header__films">
          <a href="#" className="header__link">Фильмы</a>
          <a href="#" className="header__link">Сохранённые фильмы</a>
        </li>
        <li className="header__accaunt">
          <a href="#" className="header__link">Аккаунт</a>
          <div className="profile__logo"></div>
        </li>
      </nav>
      }

    </header>
  );
}


export default Header;