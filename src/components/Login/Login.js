import React from 'react';
import GoogleLogin from 'react-google-login';
import * as PropTypes from 'prop-types';
import { failLogin, successLogin } from '../../services/loginService';

const Login = ({ setAuth }) => {
  const success = (res) => {
    successLogin(res);
    setAuth(true);
  };

  return (
    <div style={{ width: '100%', height: '100%', margin: 'auto 50%' }}>
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
