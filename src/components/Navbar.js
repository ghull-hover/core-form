import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <>
        <nav className='navbar'>'
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo"> 
                <img src="https://braze-images.com/appboy/communication/assets/image_assets/images/6195aa4f660da31a0d7c4119/original.png?1637198414" id="hover-logo" class="hover-logo" alt="hover-logo"></img>
                <img src="/core-perks-logo.png" class="core-logo" alt="core-logo" />
                </Link>
                
            </div>
        </nav>
    </>
  )
}

export default Navbar