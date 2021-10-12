import { Link } from 'react-router-dom';
import './Profile.css'
import Header from '../Header/Header';

function Profile() {
  const name = 'Артём'
  const mail = '777@777.ru'
  return (
    <div className="profile">
      <Header isAuth={true} />
      <div className="profile__container">
        <h2 className="profile__title">Привет, {name}!</h2>
        <form className="profile__form">
          <label className="profile__input-container">
            <span className="profile__input-title">Имя</span>
            <input placeholder="Имя" name="name" id="name" type="text" className="profile__input" defaultValue={name} />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-title">E-mail</span>
            <input placeholder="E-mail" name="name" id="name" type="email" className="profile__input" defaultValue={mail} />
          </label>
          <button className="profile__submit-button" type="submit">Редактировать</button>
        </form>
        <Link to="/" className="profile__exit-button" type="button">Выйти из аккаунта</Link>
      </div>
    </div>
  );
}
export default Profile;
