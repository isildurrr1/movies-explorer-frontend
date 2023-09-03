import './Header.css'
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';

const Header = ({ loggedIn, menuActive }) => {
  const location = useLocation();
  const hundleMenuActive = () => menuActive();
  return (
    <header className={`header ${location.pathname === '/' ? 'header_place_main' : ''}`}>
      <div className="header__container">
        <div className="header__box">
          <Link to="/" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          {!loggedIn ?
            <nav className="header__right-container">
              <Link to='/signup' className='header__reg'>Регистрация</Link>
              <Link to='/signin' className='header__log'>Войти</Link>
            </nav>
            :
            <>
              <div className="header__right-container">
                <nav className="header__nav-container">
                  <Link to='/movies' className={`header__nav-link ${location.pathname === '/movies' && 'header__nav-link_bold'}`}>Фильмы</Link>
                  <Link to='/saved-movies' className={`header__nav-link ${location.pathname === '/saved-movies' && 'header__nav-link_bold'}`}>Сохраненные фильмы</Link>
                </nav>
                <Link to='/profile' className='header__account'>
                  Аккаунт<div className={`header__account-icon ${location.pathname === '/' ? 'header__account-icon_dark' : ''}`}></div>
                </Link>
                <button className='header__burger-logo' onClick={hundleMenuActive} />
              </div>
            </>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;