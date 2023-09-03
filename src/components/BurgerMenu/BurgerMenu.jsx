import ProfileButton from '../ProfileButton/ProfileButton';
import './BurgerMenu.css'
import { Link, useLocation } from 'react-router-dom';

const BurgerMenu = ({ closeMenu }) => {
  const location = useLocation();
  const hundleCloseMenu = () => closeMenu()
  return (
    <div className='menu' onClick={hundleCloseMenu}>
      <div className="menu__container" onClick={e => e.stopPropagation()}>
        <button className="menu__closeBtn" onClick={hundleCloseMenu} />
        <div className="menu__content">
          <nav className="menu__navContainer">
            <Link to='/'
              className={`menu__navLink ${location.pathname === '/' && 'menu__navLink_active'}`}
              onClick={hundleCloseMenu}
            >Главная</Link>
            <Link to='/movies'
              className={`menu__navLink ${location.pathname === '/movies' && 'menu__navLink_active'}`}
              onClick={hundleCloseMenu}
            >Фильмы</Link>
            <Link to='/saved-movies'
              className={`menu__navLink ${location.pathname === '/saved-movies' && 'menu__navLink_active'}`}
              onClick={hundleCloseMenu}
            >Сохраненные фильмы</Link>
          </nav>
          <div className="menu__buttonContainer" onClick={hundleCloseMenu}>
            <ProfileButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;