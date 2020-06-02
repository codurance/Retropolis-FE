import React, { useState } from 'react';
import '../../public/index.css';
import { getAuth } from '../services/loginService';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [isAuth, setAuth] = useState(getAuth);
  return (
    <div className="App">
      {isAuth ? <Dashboard setAuth={setAuth} /> : <Login setAuth={setAuth} />}
    </div>
  );
}

export default App;
