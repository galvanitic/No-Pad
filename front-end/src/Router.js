import React, { useState, useCallback } from 'react';
import { Switch, Route, Redirect } from "react-router";
import LogIn from './components/LogIn';
import CreateAccount from './components/CreateAccount'
import Dashboard from './components/Dashboard';

import { getUserByEmail, isUserPasswordCorrect } from './database/db_utils'

const Router = () => {

  // user will be replaced by user object from db in the checkLogin function below
  // Using the entire user object as a value for your components means you don't need to look up database info very often
  const [user, setUser] = useState(null)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isEmailWrong, setIsEmailWrong] = useState(false)
  const [isPasswordWrong, setIsPasswordWrong] = useState(false)

  const [isAccountValid, setIsAccountValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [arePasswordsSame, setArePasswordsSame] = useState(false)

  // useCallback creates a function that you can use normally,
  // but it is optimized for when you want to define a function inside a React component using state values/setters
  // There is another example with more explanation in the Login component
  const checkLogin = useCallback((email, password) => {
    // If they are re-attempting login, just clear these login errors:
    setIsEmailWrong(false)
    setIsPasswordWrong(false)

    const existingUser = getUserByEmail(email)

    // getUserByEmail returns undefined if no user was found
    if(!existingUser){
      setIsEmailWrong(true)
      return
    }

    // this is where the bycrpt comparison happens
    if(!isUserPasswordCorrect(existingUser, password)){
      setIsPasswordWrong(true)
      return
    }

    // function only gets to this point if user exists and password is correct
    setIsAuthorized(true)
    setUser(existingUser)
  }, [setIsEmailWrong, setIsPasswordWrong, setIsAuthorized, setUser])

  const checkCreateAccount = useCallback((email, password, confirmPassword) => {
    // Prevent Errors
    setIsEmailValid(false)
    setArePasswordsSame(false)

    const existingUser = getUserByEmail(email)

    // getUserByEmail returns undefined if no user was found
    if(!existingUser){
      setIsEmailValid(true)
    } else {
      // console.log("Email NOT Valid")
    }

    // Checks is both passwords are the same otherwise return which cancels action
    if(password === confirmPassword){
      setArePasswordsSame(true)
    } else {
      // console.log("Passwords DON'T Match")
    }

    // function only gets to this point if the user doesn't exist and the passwords match
    if (isEmailValid && arePasswordsSame) {
      setIsAccountValid(true)
      // console.log("Account Valid")
    } else {
      return
    }

  }, [isEmailValid, setIsEmailValid, arePasswordsSame, setArePasswordsSame, setIsAccountValid])

  return(
    <Switch>
      <Route path="/login">
        <LogIn 
          checkLogin={checkLogin}
          isAuthorized={isAuthorized}
          isEmailWrong={isEmailWrong}
          isPasswordWrong={isPasswordWrong}
        />
      </Route>
      <Route path="/create-account">
        <CreateAccount
          checkCreateAccount={checkCreateAccount}
          isAccountValid={isAccountValid}
          isEmailValid={isEmailValid}
          arePasswordsSame={arePasswordsSame}
        />
      </Route>
      {!isAuthorized && <Redirect to="/login"/>}
      <Route path="/dash">
        <Dashboard user={user}/>
      </Route>
      <Redirect path="*" to="/login"/>
    </Switch>
  )
}

export default Router;