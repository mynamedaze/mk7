import React from "react";
import './HeaderMenu.scss';
import UserPreview from "../../UserPreview/UserPreview";

class HeaderMenu extends React.Component{
  render() {
    return (
	  <div className="header-menu">
		<ul className="list">
		  <li className="item">
			<a href="#" className="link  link--profile">Profile</a>
		  </li>
		  <li className="item">
			<a href="#" className="link  link--somelink">Some link</a>
		  </li>
		  <li className="item">
			<a href="#" className="link  link--somelink">Some link</a>
		  </li>
		  <li className="item">
			<a href="#" className="link  link--logout">Logout</a>
		  </li>
		</ul>
	  </div>
	)
  }
}

export default HeaderMenu;