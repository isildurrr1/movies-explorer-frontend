import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';
// import { useState } from 'react';

const App = () => {
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = true;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;