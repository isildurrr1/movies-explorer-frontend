import { Link } from 'react-router-dom'
import './Auth.css'
import Logo from '../Logo/Logo'
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Auth = ({ type, onSubmit }) => {

  const {error, setError, disabled, setDisabled} = useContext(CurrentUserContext);

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm(
    { mode: "all" }
  );

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

  useEffect(() => {
    setDisabled(!isValid)
  }, [isValid, setDisabled])

  const formSubmit = (data) => {
    onSubmit(data);
  }


  const resetForm = () => {
    reset()
    setError('')
  }

  return (
    <div className='auth'>
      <div className="auth__container">
        <div className="auth__headerContainer">
          <div className="auth__logo">
            <Logo />
          </div>
          <h1 className="auth__headerTitle">{data.hello}</h1>
        </div>
        <form className="auth__form" onSubmit={handleSubmit(formSubmit)} name='authForm'>
          {type === 'register' &&
            <div className="auth__inputContainer">
              <label htmlFor="name" className='auth__label' >Имя</label>
              <input
                {...register('name', {
                  required: "The field must not be empty",
                  pattern: {
                    value: /^[a-zA-Zа-яА-ЯёЁ+\s-]*$/,
                    message: "Enter a valid name"
                  }
                })}
                type="text"
                id='name'
                name="name"
                className="auth__input"
                placeholder='Ваше имя...'
                required
              />
              <span className='auth__error'>{errors?.name && errors.name.message}</span>
            </div>
          }
          <div className="auth__inputContainer">
            <label htmlFor="email" className='auth__label'>E-mail</label>
            <input
              {...register('email', {
                required: "The field must not be empty",
                pattern: {
                  value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                  message: "Enter a valid email"
                }
              })}
              type="email"
              id='email'
              name="email"
              className="auth__input"
              placeholder='Ваша почта...'
              required
            />
            <span className='auth__error'>{errors?.email && errors.email.message}</span>
          </div>
          <div className="auth__inputContainer">
            <label htmlFor="password" className='auth__label' >Пароль</label>
            <input
              {...register('password', {
                required: "The field must not be empty",
              })}
              type="password"
              id='password'
              name="password"
              className="auth__input"
              placeholder='Ваш пароль...'
              required
            />
            <span className='auth__error'>{errors?.password && errors.password.message}</span>
          </div>
          <span className='auth__error'>{error}</span>
          <button className={`auth__submit ${type === 'login' ? 'auth__submit_log' : ''}`} disabled={disabled}>{data.buttonText}</button>
          <div className='auth__underButtonContainer'>
            <span className='auth__underButtonText'>{data.underBtnText}</span>
            <Link className='auth__linkText' to={data.link} onClick={resetForm}>{data.toLinkText}</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth