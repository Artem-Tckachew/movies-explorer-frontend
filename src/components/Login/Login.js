import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    const passwordIsValid = false;
    const emailIsValid = true;
    return (
        <div className="login">
            <div className="login__container">
                <Link to="/" className="login__logo"></Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form name="login" className="login__form">
                    <label className="login__input-container">
                        <span className="login__input-title">E-mail</span>
                        <input placeholder="E-mail" name="email" id="email" type="email" className={`login__input ${emailIsValid ? '' : 'login__input_invalid'}`} defaultValue="" required />
                    </label>
                    <span className="email-error login__error"></span>
                    <label className="login__input-container">
                        <span className="login__input-title">Пароль</span>
                        <input placeholder="Пароль" name="password" id="password" type="password" className={`login__input ${passwordIsValid ? '' : 'login__input_invalid'}`} defaultValue="" required />
                    </label>
                    <span className="login__error">{passwordIsValid ? '' : 'Что-то пошло не так...'}</span>
                    <button className="login__submit-button" type="submit">Войти</button>
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
