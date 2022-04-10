import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from './components/dashboard'
import Register from './components/register'
import Login from './components/login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);