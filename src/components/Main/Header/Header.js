import React from 'react';
import './Header.css';
import logo from '../../../images/logo.svg';


function Header() {
    return (
        <header className="header">
            <a href="#" target="_blank" rel="noopener"><img className="header__logo" src={logo}
                                                            alt="логотип"/></a>
            <>
                <div className='header__container'>
                <a href="#" className='header__button' to="/signup">
                    Регистрация
                </a>
                <a href="#" className='header__button' to="/signin">
                    Войти
                </a>
                </div>
            </>
        </header>
    );
}


export default Header;