import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  const passwordIsValid = false;
  const emailIsValid = true;
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/" className="register__logo"></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form name="register" className="register__form">
          <label className="register__input-container">
            <span className="register__input-title">Имя</span>
            <input placeholder="Имя" name="name" id="name" type="text" className={`register__input ${emailIsValid ? '' : 'register__input_invalid'}`} defaultValue="" required />
          </label>
          <span className="email-error register__error"></span>

          <label className="register__input-container">
            <span className="register__input-title">E-mail</span>
            <input placeholder="E-mail" name="email" id="email" type="email" className={`register__input ${emailIsValid ? '' : 'register__input_invalid'}`} defaultValue="" required />
          </label>
          <span className="email-error register__error"></span>

          <label className="register__input-container">
            <span className="register__input-title">Пароль</span>
            <input placeholder="Пароль" name="password" id="password" type="password" className={`register__input ${passwordIsValid ? '' : 'register__input_invalid'}`} defaultValue="" required />
          </label>
          <span className="register__error">{passwordIsValid ? '' : 'Что-то пошло не так...'}</span>

          <button className="register__submit-button" type="submit">Зарегистрироваться</button>
        </form>
        <div className="register__bottom-container">
          <span className="register__bottom">Уже зарегистрированы?</span>
          <Link to="/signin" className="register__sign-button" type="button">Войти</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
