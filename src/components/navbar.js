import React from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className="nav-container">
        <Link to='/' className='nav-logo'>CATCH A DEEPFAKE</Link>
            <div className="nav-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to='/' className='nav-link'>HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to='/upload' className='nav-link'>UPLOAD</Link>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
