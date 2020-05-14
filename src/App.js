import React from 'react';
import '../public/index.css';
import NavBar from './components/NavBar/NavBar';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Board />
    </div>
  );
}

export default App;
