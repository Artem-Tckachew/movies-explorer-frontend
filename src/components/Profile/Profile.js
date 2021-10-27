import './Profile.css'
import React, { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import UseFormValidation from '../UseFormValidation';
import Header from '../Header/Header'
import * as mainApi from '../../utils/MainApi';

function Profile({ handleSignOut, setCurrentUser, setSuccess, setError, isError, isSuccess }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setIsValid, resetForm } = UseFormValidation();
  const email = values.email ? values.email : currentUser.email;
  const name = values.name ? values.name : currentUser.name;


  useEffect(() => {
    if (name === currentUser.name && email === currentUser.email) {
      setIsValid(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email])



  function onChange(e) {
    handleChange(e);
    setError('');
    /* if(name === currentUser.name && email === currentUser.email) {
      setIsValid(0)
    } */
  }

  function handleUserUpdate(e) {
    e.preventDefault();
    mainApi.patchProfileInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setSuccess(true);
        resetForm();
      })
      .catch((err) => {
        if (err === 409) {
          setError("Пользователь с таким email уже есть")
        } else {
          setError("Сервер отдыхает, перезагрузите страницу")
        }
      })
  }

  return (
    <div className="profile">
      <Header isLoggedIn="true" />
      <div className="profile__container">
        <h2 className="profile__title">Привет, {name}!</h2>
        <form className="profile__form" onSubmit={handleUserUpdate}>
          <label className="profile__input-container">
            <span className="profile__input-title" htmlFor="name">Имя</span>
            <input placeholder="Имя" className="profile__input" id="name" name="name" onChange={onChange} defaultValue={currentUser.name} type="text" required autoComplete="off" minLength="2" maxLength="40" />
          </label>
          <span className="profile__error">{errors.name}</span>
          <label className="profile__input-container">
            <span className="profile__input-title" htmlFor="email">E-mail</span>
            <input placeholder="E-mail" name="email" id="email" type="email" className="profile__input" pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$" onChange={onChange} defaultValue={currentUser.email} required minLength="2" maxLength="40" />
          </label>
          <span className="profile__error">{errors.email}</span>
          {isSuccess ? (
            <span className="profile__success">
              Ваш профиль успешно обновился!
            </span>
          ) : null}
          <span className="profile__error">{isError}</span>
          <button className="profile__submit-button" onClick={handleUserUpdate} disabled={!isValid} type="submit">Редактировать</button>
        </form>
        <button className="profile__exit-button" onClick={handleSignOut} type="button">Выйти из аккаунта</button>
      </div>
    </div>
  );
}
export default Profile;
