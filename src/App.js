import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import '../public/index.css';
import RetroCard from './RetroCard';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Retropolis
          </Typography>
        </Toolbar>
      </AppBar>

      <RetroCard />
    </div>
  );
}

export default App;
