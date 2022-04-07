import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/dashboard'
import SignUp from './components/signup'
import Login from './components/login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);