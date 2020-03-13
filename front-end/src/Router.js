import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router";
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';

import data from './database/database.json';

const AuthService = (email, password) => {
  
}

const checkAuth = () => {
  return true;
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

  useEffect(() => {
    AuthService(email, password);
    // console.log("useEffect updated");
  },[password]);

  return(
    <Switch>
      <Route path="/login">
        <LogIn email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
      </Route>
      <ProtectedRoute path="/dash">
        <Dashboard email={email}/>
      </ProtectedRoute>
      
      <Redirect path="*" to="/login"/>
    </Switch>
  )
}

export default Router;