import './Header.css'
import logo from '../../images/logo.svg'
import burger from '../../images/burger.svg'
import { useLocation } from 'react-router-dom';

const Header = ({ loggedIn, menuActive }) => {
  const location = useLocation();
  const hundleMenuActive = () => menuActive();
  return (
    <header className={`header ${location.pathname === '/' ? 'header_pink' : ''}`}>
      <div className="header__container">
        <div className="header__box">
          <a href="/" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo" />
          </a>
          {!loggedIn ?
            <div className="header__right-container">
              <a href='/signup' className='header__reg'>Регистрация</a>
              <a href='/signin' className='header__log'>Войти</a>
            </div>
            :
            <>
              <div className="header__right-container">
                <nav className="header__nav-container">
                  <a href='/movies' className={`header__nav-link ${location.pathname === '/movies' && 'header__nav-link_bold'}`}>Фильмы</a>
                  <a href='/saved-movies' className={`header__nav-link ${location.pathname === '/saved-movies' && 'header__nav-link_bold'}`}>Сохраненные фильмы</a>
                </nav>
                <a href='/profile' className='header__account'>
                  Аккаунт<div className={`header__account-icon ${location.pathname === '/' ? 'header__account-icon_dark' : ''}`}></div>
                </a>
                <img src={burger} alt='burger' className='header__burger-logo' onClick={hundleMenuActive} />
              </div>
            </>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;