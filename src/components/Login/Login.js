import { useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Login.css'
import { UseFormValidation } from '../UseFormValidation';
import Form from '../Form/Form';

function Login({ onLogin, setError, setIsFormSent, isFormSent, isError }) {
  const history = useHistory();
  const { values, handleChange, errors, isValid } = UseFormValidation();
  const email = values.email;
  const password = values.password;

  useEffect(() => {
    setError(false);
  }, [history, setError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsFormSent(true);
    onLogin({ email, password });
  };

  function onChange(e) {
    handleChange(e);
    setError('');
  }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/" className="login__logo"></Link>
        <h2 className="login__title">Рады видеть!</h2>
        <Form
          buttonText="Войти"
          errorText="Неверный логин или пароль"
          handleChange={onChange}
          errors={errors}
          handlerSubmit={handleSubmit}
          isFormSent={isFormSent}
          isValid={isValid}
          isError={isError}
        />
        <div className="login__bottom-container">
          <span className="login__bottom">Ещё не зарегистрированы?</span>
          <Link to="/signup" className="login__sign-button" type="button">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
