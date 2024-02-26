import React from 'react';
import { useSpring, animated } from '@react-spring/web'
import logo from '../img/moni-logo.png'

function Navbar() {
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })

  const navItems = useSpring({
    from: { y: 50 },
    to: { y: 0 },
  })

    return (
      <div className='App'>
         <animated.div
      style={{  ...springs }}>
    <nav className="navbar">
    <div className="navbar-list">
            <img className="logo" src={logo} alt='logo' />
            <div className="list-wrapper">
        <span>           
        <animated.div
      style={{ ...navItems }} className="navbar-item">
        <a className="navbar-item" href="/">Dashboard</a>
        </animated.div>
        <animated.div
      style={{  ...navItems }} className="navbar-item">
          <a className="navbar-item" href="/about">Reports</a>
          </animated.div>
          <animated.div
      style={{  ...navItems }} className="navbar-item">
          <a className="navbar-item" href="/services">Documents</a>
          </animated.div>
          <animated.div
      style={{  ...navItems }} className="navbar-item">
          <a className="navbar-item" href="/contact">History</a>
          </animated.div>
          <animated.div
      style={{  ...navItems }} className="navbar-item">
          <a className="navbar-item" href="/contact">Settings</a>
          </animated.div>
              </span> 
              </div>
              <animated.button
      style={{  ...navItems }} className="sign-up">
              Sign Up
            </animated.button>
      </div>
    </nav>
  </animated.div>
    </div>
  );
}

export default Navbar;
