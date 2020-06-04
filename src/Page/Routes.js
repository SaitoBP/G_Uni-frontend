// React:
import React from 'react';

// Router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components:
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

// Services:
import { isAuthenticated } from '../Services/Authentication/Auth';

// Sub Stateless Component:
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ?
            (
                <Component {...props} />
            ) 
            
            : 
            
            (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
);

// Main Stateless Component:
const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>

);


export default Routes