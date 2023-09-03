import './Auth.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const Auth = ({ type, onSubmit }) => {
  let data = {};
  if (type === 'register') {
    data = {
      hello: 'Добро пожаловать!',
      buttonText: 'Зарегистрироваться',
      underBtnText: 'Уже зарегистрированы?',
      toLinkText: ' Войти',
      link: '/signin'
    }
  } else if (type === 'login') {
    data = {
      hello: 'Рады видеть!',
      buttonText: 'Войти',
      underBtnText: 'Ещё не зарегистрированы?',
      toLinkText: ' Регистрация',
      link: '/signup'
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    e.target.reset();
  }
  return (
    <div className='auth'>
      <div className="auth__container">
        <div className="auth__header-container">
          <Link to={'/'} className='auth__logo'><img src={logo} alt="logo" /></Link>
          <h1 className="auth__header-title">{data.hello}</h1>
        </div>
        <form className="auth__form" onSubmit={handleSubmit} name='authForm'>
          {type === 'register' &&
            <div className="auth__input-container">
              <label htmlFor="name" className='auth__label' >Имя</label>
              <input type="text" id='name' className="auth__input" placeholder='Ваше имя...' required />
              <span className="auth__error"></span>
            </div>
          }
          <div className="auth__input-container">
            <label htmlFor="email" className='auth__label'>E-mail</label>
            <input type="email" id='email' className="auth__input" placeholder='Ваша почта...' required />
            <span className="auth__error"></span>
          </div>
          <div className="auth__input-container">
            <label htmlFor="password" className='auth__label' >Пароль</label>
            <input type="password" id='password' className="auth__input" placeholder='Ваш пароль...' required />
            <span className="auth__error">Что-то пошло не так...</span>
          </div>
          <button className={`auth__submit ${type === 'login' ? 'auth__submit_log' : ''}`} >{data.buttonText}</button>
          <div className='auth__under-button-container'>
            <span className='auth__under-button-text'>{data.underBtnText}</span>
            <Link className='auth__link-text' to={data.link}>{data.toLinkText}</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth