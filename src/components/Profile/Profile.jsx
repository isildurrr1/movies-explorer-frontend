import { Link } from 'react-router-dom';
import './Profile.css';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';

const Profile = ({ loggedIn, onExit }) => {
  const [profileData, setProfileData] = useState({ name: '', email: '' })
  const [initialProfileData, setInitialProfileData] = useState({ name: '', email: '' })
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (loggedIn) {
      mainApi.getProfileInfo()
        .then(userData => {
          setInitialProfileData(userData)
          setProfileData(userData)
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  const handleEdit = () => {
    setError('')
    setEdit(!edit);
  }

  const exit = () => onExit();

  const updateProfile = (e) => {
    e.preventDefault();
    console.log(initialProfileData === profileData)
    console.log(profileData)
    if (initialProfileData !== profileData) {
      setDisabled(true)
      mainApi.setProfileInfo(profileData)
        .then((result) => {
          setInitialProfileData(result)
          setProfileData(result)
          setError('Успешно')
          setTimeout(() => {
            setEdit(!edit);
            setDisabled(false)
          }, 1000)
        }
        )
        .catch(err => {
          setDisabled(false)
          if (err === 'Ошибка: 400') {
            setError("Некорректные данные");
          }
        })
    } else {
      setEdit(!edit);
    }
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
              <span
                className="profile__error"
                style={
                  error === 'Успешно' ?
                    {
                      color: 'green',
                      fontSize: 30,
                      marginBottom: '20px',
                      marginTop: '-20px'
                    } : {}}>{error}</span>
              <button className='profile__save' type='submit' disabled={disabled}>Сохранить</button>
            </div>)
            :
            (
              <div className="profile__edit">
                <button className='profile__link profile__link_submit' type='button' onClick={handleEdit}>Редактировать</button>
                <Link className='profile__link profile__link_logout' to={'/'} onClick={exit}>Выйти из аккаунта</Link>
              </div>
            )}
        </form>
      </div >
    </section >
  )
}

export default Profile;