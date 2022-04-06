import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import SignUp from './SignUp';

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <SignUp/>
  </React.StrictMode>,
  document.getElementById('root')
);