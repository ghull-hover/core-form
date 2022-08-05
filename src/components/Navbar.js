import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
        <nav className='navbar'>'
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo"> 
                <img src="/hover-and-core.png" id="hover-logo" className="hover-logo" alt="hover-logo"></img>
                </Link>
                
            </div>
        </nav>
    </>
  )
}

export default Navbar