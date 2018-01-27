import React from 'react';
import ReactDOM from 'react-dom';
import {
  signup,
  login,
  logout
} from "./util/session_api_util";


document.addEventListener("DOMContentLoaded", () => {
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>lets rent benches betch</h1>, root);

});
