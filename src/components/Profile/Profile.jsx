import { Link } from 'react-router-dom';
import './Profile.css';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';

const Profile = ({ loggedIn, onExit }) => {
  const [profileData, setProfileData] = useState({ name: '', email: '' })
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getProfileInfo()
        .then(userData => setProfileData(userData))
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  const handleEdit = () => setEdit(!edit);

  const exit = () => onExit();

  const updateProfile = (e) => {
    e.preventDefault();
    setEdit(!edit);
    mainApi.setProfileInfo(profileData)
      .then((result) => setProfileData(result))
      .catch(error => console.error(error))
  }

  return (
    <section className='profile'>
      <div className="profile__container">
        <form className="profile__form" onSubmit={updateProfile}>
          <h1 className="profile__title">{`Привет, ${profileData.name}!`}</h1>
          <div className="profile__inputContainer profile__inputContainer_underline">
            <label className='profile__label' htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              className="profile__input"
              value={profileData.name}
              onChange={e => { setProfileData(state => ({ ...state, name: e.target.value })) }}
              disabled={!edit} />
          </div>
          <div className="profile__inputContainer">
            <label className='profile__label' htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="profile__input"
              value={profileData.email}
              onChange={e => { setProfileData(state => ({ ...state, mail: e.target.value })) }}
              disabled={!edit} />
          </div>
          {edit ?
            (<div className="profile__editContainer">
              <span className="profile__error"></span>
              <button className='profile__save' type='submit'>Сохранить</button>
            </div>)
            :
            (
              <div className="profile__edit">
                <button className='profile__link profile__link_submit' type='button' onClick={handleEdit}>Редактировать</button>
                <Link className='profile__link profile__link_logout' to={'/'} onClick={exit}>Выйти из аккаунта</Link>
              </div>
            )}
        </form>
      </div>
    </section>
  )
}

export default Profile;