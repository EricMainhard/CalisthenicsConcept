import React from 'react';
import './login.css';

function Login() {

  const handleLoginButton = (e) => {
    e.preventDefault();
    alert('This functionality is not ready yet');
  }

  return (
    <div className='login'>
      <form className='loginForm'>
        <div className="formInput">
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div className="formInput">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <button className='homeBannerCta' onClick={handleLoginButton}>LOG IN</button>
      </form>
    </div>
  )
}

export default Login