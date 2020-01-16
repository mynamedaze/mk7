import React from 'react';
import './UserPreview.scss';

class UserPreview extends React.Component{
  render() {
    return (
	  <a href="#" className="user-preview">
		<img src="#" alt="user" className="avatar"/>
		<span className="username">Username</span>
	  </a>
	)
  }
}

export default UserPreview;