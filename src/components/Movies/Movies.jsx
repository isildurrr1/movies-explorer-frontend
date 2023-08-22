import Footer from '../Footer/Footer';
import BurgerMenu from '../Header/BurgerMenu/BurgerMenu';
import Header from '../Header/Header';
import Search from '../Search/Search';
import './Movies.css';

const Movies = ({ loggedIn, menuActive, toggleMenuActive }) => {
  return (
    <>
      {menuActive && <BurgerMenu closeMenu={toggleMenuActive} />}
      <Header loggedIn={loggedIn} bgColor={'white'} menuActive={toggleMenuActive} />
      <Search />
      <Footer />
    </>
  )
}

export default Movies