import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router";
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';

import data from './database/database.json';

var bcrypt = require('bcryptjs');

const AuthService_data = {
  isAuthenticated: false,
}

const AuthService = (login_submitted, email, password) => {
  if (login_submitted) {
    const user_data = data[email];
    console.log("User Password_Encrypted: " + user_data.password_encrypted);
    
    // Load hash from database
    bcrypt.compare(password, user_data.password_encrypted, function(err, res) {
      console.log("Auth: " + res);
      if (res) {
        AuthService_data.isAuthenticated = true;
      } else if (!res) {
        AuthService_data.isAuthenticated = false;
      }
    });

  } else {
    // Tell user that login form is NOT SUBMITTED
  }

  
}

const checkAuth = () => {
  return false;
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return(
    <Route 
    {...rest}
    render = {(props) => (checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}
    />
  )
}

const Router = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login_submitted, setLogin_submitted] = useState(false);

  useEffect(() => {
    AuthService(login_submitted, email, password);
    console.log("login_submitted: " + login_submitted);
  },[login_submitted]);

  return(
    <Switch>
      <Route path="/login">
        <LogIn 
        email={email}                     setEmail={setEmail} 
        password={password}               setPassword={setPassword} 
        login_submitted={login_submitted} setLogin_submitted={setLogin_submitted}/>
      </Route>
      <ProtectedRoute path="/dash">
        <Dashboard email={email}/>
      </ProtectedRoute>
      
      <Redirect path="*" to="/login"/>
    </Switch>
  )
}

export default Router;