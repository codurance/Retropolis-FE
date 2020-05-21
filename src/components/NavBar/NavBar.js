import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GoogleLogin from 'react-google-login';
import { failLogin, successLogin } from '../../services/loginService';

const NavBar = () => (
  <AppBar position="static" style={{ marginBottom: '10px' }}>
    <Toolbar>
      <Typography variant="h6">
        Retropolis
      </Typography>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={successLogin}
        onFailure={failLogin}
        cookiePolicy="single_host_origin"
      />
    </Toolbar>
  </AppBar>
);

export default NavBar;
