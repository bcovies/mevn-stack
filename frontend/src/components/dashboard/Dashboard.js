import React from 'react';
import {Link} from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2>
        Página de Dashboard
      </h2>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/signup">SignUp</Link>
    </>
  );
}

export default Dashboard;