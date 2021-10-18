import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.css'
import { UseFormValidation } from '../UseFormValidation';
import Form from '../Form/Form';

function Register({ onRegister, setError, setIsFormSent, isError, isFormSent }) {
  const history = useHistory();
  const { values, handleChange, errors, isValid } = UseFormValidation({
    email: '',
    password: '',
    name: ''
  });

  React.useEffect(() => {
    setError(false);
  }, [history]);

  function handleSubmit(e) {
    setIsFormSent(true);
    e.preventDefault();
    const { email, password, name } = values;
    onRegister(password, email, name);
  }

  return (
    <div className="register">
      <div className="register__container">
        <Link to="/" className="register__logo"></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <Form
          buttonText='Зарегистрироваться'
          message='Уже зарегистрированы?'
          route='/signin'
          linkText='Войти'
          errorText="При попытке регистрации произошла ошибка."
          handleChange={handleChange}
          errors={errors}
          handlerSubmit={handleSubmit}
          values={values}
          isFormSent={isFormSent}
          isValid={isValid}
          isError={isError}
        >
          <label className="register__input-container">
            <span className="register__input-title">Имя</span>
            <input value={values.name} onChange={handleChange} name="name" id="name" type="text" className='register__input' minLength='2' defaultValue="" required />
          </label>
          <span className="email-error register__error" id='name-error'>{errors.name || ''}</span>
        </Form>
        <div className="register__bottom-container">
          <span className="register__bottom">Уже зарегистрированы?</span>
          <Link to="/signin" className="register__sign-button" type="button">Войти</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
