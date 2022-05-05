import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../components/images/logo.png'


function Header() {
  return (
    <>
        <div className="header">
        <h1>Web Work</h1>
        <p>Professional Developer in Edinburgh.</p>
      </div>

      <div className="navbar">
        <Link to="/" className="left">
          <div className='logo'>
            <img alt='logo' src={logo} />
          </div>
        </Link>
        <Link to="/projects">Projects</Link>
      </div>
    </>
  )
}

export default Header