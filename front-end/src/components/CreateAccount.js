import React, { useState, useEffect, useCallback } from 'react';
import '../style/style-create-account.css'

const CreateAccount = () => {

  const [isInputFilled, setIsInputFilled] = useState(false)

  const handleButtonClick = useCallback((e) => {
    e.preventDefault();
    if(isInputFilled){
      // checkLogin(email, password)
    }
  }, [])

  useEffect(() => {
    if("email" === "" || "password" === ""){
      setIsInputFilled(false)
    } else {
      setIsInputFilled(true)
    }
  }, [])

  return(
    <div id="create-account-container">
      <div id="create-account-form">
        <h2>Create Account</h2>
        <h4>Create an Account to continue</h4>
        
        <form>
          <label htmlFor="mail">Email Address</label>
          <input type="email" id="mail" name="user_email"/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="user_password"/>

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-user_password"/>

          <button 
          type="submit"
          className={!isInputFilled ? "disabled" : ""}>
            Sign In
          </button>
        </form>

      </div>
    </div>
  )
}

export default CreateAccount;