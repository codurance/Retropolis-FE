import React from 'react';
import GoogleLogin from 'react-google-login';
import * as PropTypes from 'prop-types';
import { failLogin, successLogin } from '../../services/loginService';

const Login = ({ setAuth }) => (
  <GoogleLogin
    clientId={process.env.GOOGLE_AUTH_CLIENT_ID}
    buttonText="Login"
    onSuccess={(res) => successLogin(res, setAuth)}
    onFailure={failLogin}
    cookiePolicy="single_host_origin"
  />
);

Login.propTypes = {
  setAuth: PropTypes.func.isRequired
};

export default Login;
