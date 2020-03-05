import React from 'react';
import '../style/style-login.css'

class LogIn extends React.Component {
  render () {
    return(
      <div id="login-container">
        <div id="login-form">
          <h2>Log In</h2>
          <h4>Sign into your account to continue</h4>

          <div className="form-section" id='email-container'>
            <h5>Email Address</h5>
            <div className="input-field" id='email-field'></div>
          </div>

          <div className="form-section" id='password-container'>
            <h5>Password</h5>
            <div className="input-field" id='password-field'></div>
          </div>

          <div id="signin"><h3>Sign In</h3></div>

          <h5 id="createAccount-text">Not Registered? <span>Create Account</span></h5>
        </div>
      </div>
    )
  }
}

export default LogIn;