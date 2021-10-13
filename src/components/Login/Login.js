import { Link } from 'react-router-dom';
import React from 'react';
import './Login.css'
import { UseFormValidation } from '../UseFormValidation';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Login({ onLoginSubmit }) {
  const { values, handleChange, resetFrom, errors, isValid } = UseFormValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, true);
    }
  }, [currentUser, resetFrom]);

  function handleSumbit(e) {
    e.preventDefault();
    onLoginSubmit(values)
  }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/" className="login__logo"></Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form name="login" className="login__form">
          <label className="login__input-container">
            <span className="login__input-title">E-mail</span>
            <input value={values.email || ''} placeholder="E-mail" onChange={handleChange} name="email" id="email" type="email" className='login__input login__input_name' defaultValue="" required />
          </label>
          <span className="login__error" id='email-error'>{errors.email || ''}</span>
          <label className="login__input-container">
            <span className="login__input-title">Пароль</span>
            <input value={values.password || ''} placeholder="Пароль" name="password" onChange={handleChange} id="password" type="password" className='login__input login__input_password' defaultValue="" required />
          </label>
          <span className="login__error" id='password-error'>{errors.password || ''}</span>
          <button className="login__submit-button" disabled={!isValid} type="submit" onSubmit={handleSumbit}>Войти</button>
        </form>
        <div className="login__bottom-container">
          <span className="login__bottom">Ещё не зарегистрированы?</span>
          <Link to="/signup" className="login__sign-button" type="button">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
