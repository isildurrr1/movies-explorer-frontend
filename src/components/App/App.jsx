import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
import NotFound from '../NotFound/NotFound';
import { useState } from 'react';
import Movies from '../Movies/Movies';

const App = () => {
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuActive = () => setMenuActive(!menuActive);
  const loggedIn = true;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} menuActive={menuActive} toggleMenuActive={toggleMenuActive} />} />
        <Route path='/movies' element={<Movies loggedIn={loggedIn} menuActive={menuActive} toggleMenuActive={toggleMenuActive}/>} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;