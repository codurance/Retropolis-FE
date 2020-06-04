import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Board from './components/Board/Board';
import Home from './components/Home/Home';

ReactDOM.render(
  <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/:id" component={Board} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);
