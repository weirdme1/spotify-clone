  import React from 'react';
  import './login.css';
  import { accessUrl } from './spotify';

  function Login() {
      return (
        <div className="login">
            <h1>Im the login page</h1>
            <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="" />
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
      )
  }
  
  export default Login;  