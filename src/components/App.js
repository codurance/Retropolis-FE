import React, { useState } from 'react';
import '../../public/index.css';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';
import Board from './Board/Board';

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <div className="App">
      <NavBar />
      {isAuth ? <Board setAuth={setAuth} /> : <Login setAuth={setAuth} />}
    </div>
  );
}

export default App;
