import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// routes for authorization
const Auth = ({ component: Component, loggedIn, ...rest }) => (
  <Route 
    {...rest}
    render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        // Redirect to the classes page if the user is authenticated
        <Redirect to="/classes" />
      )
  )} />
);

// authenticated users only
const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
          // Redirect to the login page if the user is already authenticated
          <Redirect to="/login" />
        )
    }
  />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in
const mapStateToProps = state => (
  { loggedIn: state.session.isAuthenticated }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));