import { Routes, Route, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import BurgerMenu from '../Header/BurgerMenu/BurgerMenu';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Auth from '../Auth/Auth';

const App = () => {
  const location = useLocation();
  const headerLocation = ['/', '/movies', '/saved-movies', '/profile'];
  const footerLocation = ['/', '/movies', '/saved-movies'];
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuActive = () => setMenuActive(!menuActive);
  const loggedIn = true;
  return (
    <div className="App">
      {menuActive && <BurgerMenu closeMenu={toggleMenuActive} />}
      {headerLocation.find((i) => i === location.pathname) && 
      <Header loggedIn={loggedIn} bgColor={'white'} menuActive={toggleMenuActive} />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Auth type='register'/>} />
        <Route path='/signin' element={<Auth type='login'/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {footerLocation.find((i) => i === location.pathname) && 
      <Footer />}
    </div>
  );
}

export default App;