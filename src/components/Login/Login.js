import React from 'react';
import GoogleLogin from 'react-google-login';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { failLogin, successLogin } from '../../services/loginService';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    margin: 'auto 50%'
  }
}));

const Login = ({ setAuth }) => {
  const classes = useStyles();

  const success = (res) => {
    successLogin(res);
    setAuth(true);
  };

  return (
    <div className={classes.root}>
      <p>Please log in</p>
      <GoogleLogin
        clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
        buttonText="Login"
        onSuccess={success}
        onFailure={failLogin}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

Login.propTypes = {
  setAuth: PropTypes.func.isRequired
};

export default Login;
