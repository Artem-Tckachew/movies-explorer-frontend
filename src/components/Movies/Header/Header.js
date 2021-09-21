import React from 'react';
import './Header.css';
import logo from '../../../images/logo.svg';

function Header() {
  return (
    <header className="header">
        <ul className="header__content">
            <img src={logo} alt="logo" />
            <li className="header__films">
                <a href="#" className="header__link">Фильмы</a>
                <a href="#" className="header__link">Сохранённые фильмы</a>
            </li>   
            <li className="header__accaunt">
                <a href="#" className="header__link">Аккаунт</a>
                <div className="profile__logo"></div>
            </li>
      </ul>
    </header>
  );
}

export default Header;
