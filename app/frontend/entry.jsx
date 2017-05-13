import React from 'react';
import ReactDOM from 'react-dom';

import {signUpUser, loginUser, logoutUser } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.signUpUser = signUpUser;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>REACT IS KIND OF WORKING</h1>, root);
});
