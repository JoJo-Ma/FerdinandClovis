import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import './navbar.css'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const classNav =
    toggleMenu
    ?
    'visible'
    :
    'hidden'

  return (
    <nav id="navigationBar">
      {
        (true) && (
          <ul  id="sideNav" className={classNav}>
            <li onClick={toggleNav}>
              <Link to="/">HOME</Link>
            </li>
            <li onClick={toggleNav}>
              <HashLink smooth to="/#about">ABOUT US</HashLink>
            </li>
            <li onClick={toggleNav}>
              <HashLink smooth to="/#expertise">WHAT WE DO</HashLink>
            </li>
            <li onClick={toggleNav}>
              <HashLink smooth to="/#portfolio">CLIENTS & PORTFOLIO</HashLink>
            </li>
            <li onClick={toggleNav}>
              <HashLink smooth to="/#contact">CONTACT US</HashLink>
            </li>
          </ul>
        )
      }
      <div className="button"  onClick={toggleNav}>
        { toggleMenu ?
          <FontAwesomeIcon icon={faAngleUp}  />
          :
          <FontAwesomeIcon icon={faBars} />
         }
      </div>

  </nav>
  )
}

export default NavBar;
