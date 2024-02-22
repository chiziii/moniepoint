import React from 'react';
import logo from '../img/moni-logo.png'

function Navbar() {
    return (
      <div className='App'>
    <nav className="navbar">
    <div className="navbar-list">
        <img className="logo" src={logo} alt='logo' />
        <span>           
          <a className="navbar-item" href="/">Dashboard</a>
          <a className="navbar-item" href="/about">Reports</a>
          <a className="navbar-item" href="/services">Documents</a>
          <a className="navbar-item" href="/contact">History</a>
          <a className="navbar-item" href="/contact">Settings</a>
            </span> 
            <button className="sign-up">
              Sign Up
            </button>   
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
