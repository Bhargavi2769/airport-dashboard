import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '@spectrum-icons/workflow/Home';
import Dashboard from '@spectrum-icons/workflow/Dashboard';
import { Flex, Text } from '@adobe/react-spectrum';
// import '@adobe/react-spectrum/dist/react-spectrum.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link to="/" className="nav-link">
          <Flex alignItems="center">
            <Home />
            <Text marginStart="size-100">Home</Text>
          </Flex>
        </Link>
        <Link to="/dashboard" className="nav-link">
          <Flex alignItems="center">
            <Dashboard />
            <Text marginStart="size-100">Dashboard</Text>
          </Flex>
        </Link>
        <p className='nav-link-1'>Services</p>
        <Link to="/airports" className="nav-link">
          <p>Airports</p>
        </Link>
        <p className='nav-link'>Videos</p>
        <div className="other-section">
          <p className='nav-link-1'>Others</p>
          <p>List 1</p>
          <p>List 2</p>
          <p>List 3</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;

