import './Profile.css'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import UseFormValidation from '../UseFormValidation';
import Header from '../Header/Header'

function Profile({ handleSignOut, handleUpdateUser, setSuccess, setError }) {
  const { email, name } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = UseFormValidation({
    name,
    email,
  });

  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setHasChanges(
      !(values.name === name) || (!(values.email === email) && isValid)
    );
  }, [values.name, values.email, name, email]);

  const onEditSubmit = (evt) => {
    evt.preventDefault();
    setSuccess('');
    setError('');
    // eslint-disable-next-line no-shadow
    const { email, name } = values;
    handleUpdateUser({ email, name });
  };

  return (
    <div className="profile">
      <Header isAuth={true} />
      <div className="profile__container">
        <h2 className="profile__title">Привет, {name}!</h2>
        <form className="profile__form" onSubmit={onEditSubmit}>
          <label className="profile__input-container">
            <span className="profile__input-title">Имя</span>
            <input placeholder="Имя" className="profile__input" id="name" name="name" onChange={handleChange} value={values.name} defaultValue={name} required autoComplete="off" minLength="2" maxLength="40" />
          </label>
          <span className="profile__error" id='name-error'>{errors.name || ''}</span>
          <label className="profile__input-container">
            <span className="profile__input-title">E-mail</span>
            <input placeholder="E-mail" name="email" id="email" type="email" className="profile__input" pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$" onChange={handleChange} value={values.email} defaultValue={email} required minLength="2" maxLength="40" />
          </label>
          <span className="profile__error" id='email-error'>{errors.email || ''}</span>
          <button className="profile__submit-button" disabled={!hasChanges && !isValid} type="submit">Редактировать</button>
        </form>
        <Link to="/" className="profile__exit-button" onClick={handleSignOut} type="button">Выйти из аккаунта</Link>
      </div>
    </div>
  );
}
export default Profile;
