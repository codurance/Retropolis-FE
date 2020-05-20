import React, { useState } from 'react';
import '../../public/index.css';
import NavBar from './NavBar/NavBar';
import Board from './Board/Board';

function App() {
  const [user, setUser] = useState({ username: '', token: '' });

  function processUser(googleResponse) {
    setUser({ username: googleResponse.profileObj.givenName, token: googleResponse.tokenId });
  }

  return (
    <div className="App">
      <NavBar processUser={processUser} />
      <Board user={user} />
    </div>
  );
}

export default App;
