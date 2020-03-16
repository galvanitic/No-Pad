import React, { useState, useEffect, useCallback } from 'react';
import '../style/style-create-account.css'

const CreateAccount = ({
  checkCreateAccount,
  isAccountValid,
  isEmailUnvalid,
  arePasswordsDifferent
}) => {

  // now that we have the checkCreateAccount function, the email and password states can live here
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isInputFilled, setIsInputFilled] = useState(false)

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;

    setEmail(newEmail);
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;

    setPassword(newPassword);
  }

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;

    setConfirmPassword(newConfirmPassword);
  }

  const handleButtonClick = useCallback((e) => {
    e.preventDefault();
    if(isInputFilled){
      checkCreateAccount(email, password, confirmPassword);
    }
  }, [email, password, confirmPassword, isInputFilled, checkCreateAccount])

  useEffect(() => {
    if(email === "" || password === "" || confirmPassword === ""){
      setIsInputFilled(false)
    } else {
      setIsInputFilled(true)
    }
  }, [email, password, confirmPassword, setIsInputFilled])

  if(isAccountValid){
    console.log("Account Created")
    // Perferable store data in a server database
    // Create a new entry in the database.json file
    // Hash password
    // Authenticate user and redirect to dashboard with return <Redirect to="/dash"/>

  }

  return(
    <div id="create-account-container">
      <div id="create-account-form">
        <h2>Create Account</h2>
        <h4>Create an Account to continue</h4>
        
        <form>
          <label htmlFor="mail">Email Address</label>
          <input type="email" id="mail" name="user_email" value={email} onChange={handleEmailChange}/>
          {(isEmailUnvalid) && <div className="login-error-mess">Email is not Valid</div>}

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="user_password" value={password} onChange={handlePasswordChange}/>

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-user_password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
          {(arePasswordsDifferent) && <div className="login-error-mess">Passwords Don't Match</div>}

          <button 
          type="submit"
          onClick={handleButtonClick}
          className={!isInputFilled ? "disabled" : ""}>
            Create Account
          </button>
        </form>

      </div>
    </div>
  )
}

export default CreateAccount;