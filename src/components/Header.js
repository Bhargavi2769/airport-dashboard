import React, { Component } from 'react';
import logo from '../logo.svg';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className='heading'>Hava Havai</h1>
        <img src={logo} alt="Profile Pic" className="profile-pic" />
      </div>
    );
  }
}

export default Header;
