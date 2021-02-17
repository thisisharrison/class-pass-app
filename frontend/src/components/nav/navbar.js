import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { NavLink, NavWrapper, Nav } from '../styles/nav_styles';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <NavLink to={'/new-class'}>New Class</NavLink>
          <NavLink to={`/profile`}>My Account</NavLink>
          <NavLink as="button" onClick={this.logoutUser}>Sign Out</NavLink>
        </>
      )
    } else {
      return (
        <>
          <NavLink to={'/account/login'}>Sign In</NavLink>
        </>
      )
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    
  }
  
  render() {
    return (
      <NavWrapper>
      <Nav>
        <Avatar src="https://cdn.dribbble.com/users/87003/screenshots/926295/dri1.jpg?compress=1&resize=400x300" 
          />
        <NavLink to={'/#'}>Kittens</NavLink>
        <NavLink to={'/#'}>Cats</NavLink>
        <NavLink to={'/#'}>Accessories</NavLink>
        <NavLink to={'/#'}>Community</NavLink>
        <NavLink promo={"true"} to={'/classes'}>Classes</NavLink>
        {this.getLinks()}
      </Nav>
      </NavWrapper>
    )
  }
}
