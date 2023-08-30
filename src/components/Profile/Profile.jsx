import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="profile__container">
        <form className="profile__form">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__input-container">
            <label className='profile__label' htmlFor="name">Имя</label>
            <input type="text" id="name" className="profile__input" value='Виталий'/>
          </div>
          <span className="profile__error"></span>
          <span className="profile__line"/>
          <div className="profile__input-container">
            <label className='profile__label' htmlFor="email">E-mail</label>
            <input type="email" id="email" className="profile__input" value='pochta@yandex.ru'/>
          </div>
          <span className="profile__error">Error</span>
          <button className='profile__link profile__link_submit' type='submit'>Редактировать</button>
          <Link className='profile__link profile__link_logout' to={'/signin'}>Выйти из аккаунта</Link>
        </form>
      </div>
    </div>
  )
}

export default Profile;