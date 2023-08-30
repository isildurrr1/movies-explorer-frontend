import './BurgerMenu.css'
import closeIcon from '../../../images/close.svg'
import accountLogo from '../../../images/account-logo.svg'
import { useLocation } from 'react-router-dom';

const BurgerMenu = ({ closeMenu }) => {
  const location = useLocation();
  const hundleCloseMenu = () => closeMenu()
  return (
    <div className='menu' onClick={hundleCloseMenu}>
      <div className="menu__container" onClick={e => e.stopPropagation()}>
        <img src={closeIcon} alt="closeIcon"
          className="menu__close-icon"
          onClick={hundleCloseMenu} />
        <div className="menu__content">
          <nav className="menu__nav-container">
            <a href='/'
              className={`menu__nav-link ${location.pathname === '/' && 'menu__nav-link_active'}`}
              onClick={hundleCloseMenu}
            >Главная</a>
            <a href='/movies'
              className={`menu__nav-link ${location.pathname === '/movies' && 'menu__nav-link_active'}`}
            >Фильмы</a>
            <a href='/saved-movies'
              className={`menu__nav-link ${location.pathname === '/saved-movies' && 'menu__nav-link_active'}`}
            >Сохраненные фильмы</a>
          </nav>
          <a href='/movies' className='menu__account'>
            Аккаунт
            <div className="menu__account-icon">
              <img src={accountLogo} alt="accountLogo" className="menu__account-logo" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;