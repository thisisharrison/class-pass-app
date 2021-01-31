import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route/route_util';
import { Switch } from 'react-router-dom';

import HomePage from './home/home_page';
import NavBarContainer from './nav/navbar_container';
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container';

// Homepage: landing page of e-commerce site
// Class Pass Landing Page: show classes, fitlers, prompt user to register / login
// Session Pages (register and login)
// User Profile (show saves and bookings if any)
// Class Show Page (show Class Times)

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={HomePage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;