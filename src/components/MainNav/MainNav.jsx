import React from "react";
import './MainNav.scss';

class MainNav extends React.Component {
  render() {
    return (
	  <nav className="main-nav">
		<ul className="list">
		  <li className="item">
			<a href="#" className="link">About</a>
		  </li>
		  <li className="item">
			<a href="#" className="link">Contact</a>
		  </li>
		</ul>
	  </nav>
	)
  }
}

export default MainNav;