import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Auth from '../Auth/Auth';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';

const App = () => {
  const location = useLocation();
  const headerLocation = ['/', '/movies', '/saved-movies', '/profile'];
  const footerLocation = ['/', '/movies', '/saved-movies'];
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState('');
  const toggleMenuActive = () => setMenuActive(!menuActive);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          setCurrentUser(res)
          setLoggedIn(true);
        })
        .catch(err => console.log(err));
    } else {
      setLoggedIn(false)
    }
  }, [navigate])

  const handleRegister = (data) => {
    const { name, email, password } = data;
    mainApi.register(name, email, password)
      .then(() => {
        setDisabled(true)
        setLoggedIn(true);
        navigate('/signin', { replace: true });
        setDisabled(false)
      })
      .catch((error) => {
        if (error === 'Ошибка: 400') {
          setError("Некорректные данные");
        } else if (error === 'Ошибка: 409') {
          setError('Пользователь существует');
        } else {
          setError(error);
        }
      })
  }

  const handleLogin = (data) => {
    const { email, password } = data;
    mainApi.login(email, password)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', res.token);
        navigate('/movies', { replace: true })
      })
      .catch((error) => {
        if (error === 'Ошибка: 400') {
          setError("Некорректные данные");
        } else {
          setError(error);
        }
      })
  }

  const handleSignout = () => {
    setLoggedIn(false);
    localStorage.clear();
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, error, setError, disabled, setDisabled }}>
      <div className="App">
        {menuActive && <BurgerMenu closeMenu={toggleMenuActive} />}
        {headerLocation.find((i) => i === location.pathname) &&
          <Header loggedIn={loggedIn} bgColor={'white'} menuActive={toggleMenuActive} />}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
            <ProtectedRouteElement loggedIn={loggedIn} element={Movies} />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRouteElement loggedIn={loggedIn} element={SavedMovies} />
          } />
          <Route path='/profile' element={
            <ProtectedRouteElement loggedIn={loggedIn} element={Profile} onExit={handleSignout} />
          } />
          <Route path='/signup' element={<Auth type='register' onSubmit={handleRegister} />} />
          <Route path='/signin' element={<Auth type='login' onSubmit={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {footerLocation.find((i) => i === location.pathname) &&
          <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;