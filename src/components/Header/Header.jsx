import React from 'react';
import './Header.scss';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import MainNav from "../MainNav/MainNav";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import UserPreview from "../UserPreview/UserPreview";

class Header extends React.Component {
  render() {
    return (
	  <header className="page-header">
		<div className="wrapper">
		  <a href="#" className="logo-link">
			<img src="#" alt="mk7" className="logo"/>
		  </a>
		  <MainNav/>
		  <div className="profile-field">
			<div className="profile-logreg">
			  <a href="#" className="login-btn">Login</a>
			  <span> / </span>
			  <a href="#" className="register-btn">Register</a>
			</div>
			<UserPreview/>
			<HeaderMenu/>
		  </div>
		</div>
	  </header>
	)
  }
}

export default Header;