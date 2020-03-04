import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';

const checkAuth = () => {
  return true;
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return(
    <Route 
    {...rest}
    render = {(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />
    }
    />
  )
}

const Router = () => {
  return(
    <Switch>
      <Route path="/login" component={LogIn} />
      <ProtectedRoute path="/dash" component={Dashboard} />
      
      <Redirect path="*" to="/login"/>
    </Switch>
  )
}

export default Router;