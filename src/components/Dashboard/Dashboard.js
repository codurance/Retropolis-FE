import React from 'react';
import Home from '../Home/Home';

function Dashboard() {
  console.log(window.location.pathname);
  return <Home />;
}

export default Dashboard;
