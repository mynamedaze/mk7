import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
	  <header className="page-header">
		<div className="wrapper">
		  <a href="#" className="logo-link">
			<img src="#" alt="mk7" className="logo"/>
		  </a>
		  <nav className="nav">
			<ul className="nav-list">
			  <li className="nav-item">
				<a href="#" className="nav-link">About</a>
			  </li>
			  <li className="nav-item">
				<a href="#" className="nav-link">Contact</a>
			  </li>
			</ul>
		  </nav>
		  <div className="profile-field">
			<div className="profile-logreg">
			  <a href="#" className="login-btn">Login</a>
			  <span> / </span>
			  <a href="#" className="register-btn">Register</a>
			</div>
			<a href="#" className="profile">
			  <img src="#" alt="user" className="avatar"/>
			  <span className="username">Username</span>
			</a>
			<div className="profile-popup">
			  <ul className="menu-list">
				<li className="menu-item">
                  <span className="menu-user">
                    <img src="#" alt="user" className="avatar"/>
                    <span className="username">Username</span>
                  </span>
				  <a href="#" className="menu-link  menu-link--profile">Profile</a>
				  <a href="#" className="menu-link  menu-link--somelink">Some link</a>
				  <a href="#" className="menu-link  menu-link--somelink">Some link</a>
				  <a href="#" className="menu-link  menu-link--logout">Logout</a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </header>
	)
  }
}

export default Header;