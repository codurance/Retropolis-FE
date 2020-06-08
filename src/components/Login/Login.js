import React from 'react';
import GoogleLogin from 'react-google-login';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { failLogin, successLogin, redirectAfterLogin } from '../../services/loginService';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    margin: 'auto 50%'
  }
}));

const Login = ({ history }) => {
  const classes = useStyles();

  const success = (res) => {
    successLogin(res);
    redirectAfterLogin(history);
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

const history = PropTypes.shape({
  push: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
});

Login.propTypes = {
  history: history.isRequired
};

export default Login;
