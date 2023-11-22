import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from './components/Header/Header';
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GamesDetails';


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {

    const result = await authService.login(values.email, values.password)

    // email,
    //     username, 
    //   _id,
    //    accessToken 
    setAuth(result)
    navigate(Path.Home)

  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="box">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/create" element={<GameCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes >
      </div >
    </AuthContext.Provider >
  );
};

export default App
