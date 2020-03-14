import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import '../style/style-login.css'

const LogIn = ({ email, setEmail, password, setPassword, setLogin_submitted }) => {

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;

    setEmail(newEmail);
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    setPassword(newPassword);
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setLogin_submitted(true);
  }

  // Security Issue
  // if (hasSubmitted) {
    // Warning: Cannot update a component from inside the function body of a different component.
    // setLogin_submitted(true);
    // return <Redirect to='/dash'/>
  // }

  return(
    <div id="login-container">
      <div id="login-form">
        <h2>Log In</h2>
        <h4>Sign into your account to continue</h4>

        {/* <div className="form-section" id='email-container'>
          <h5>Email Address</h5>
          <div className="input-field" id='email-field'></div>
        </div>

        <div className="form-section" id='password-container'>
          <h5>Password</h5>
          <div className="input-field" id='password-field'></div>
        </div>

        <div id="signin"><h3>Sign In</h3></div> */}

        <form>
          <label htmlFor="mail">Email Address</label>
          <input type="email" id="mail" name="user_email" value={email} onChange={handleEmailChange}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="user_password" value={password} onChange={handlePasswordChange}/>

          <button type="submit" onClick={handleButtonClick}>Sign In</button>
        </form>

        <h5 id="createAccount-text">Not Registered? <span>Create Account</span></h5>
      </div>
    </div>
  )
}

export default LogIn;