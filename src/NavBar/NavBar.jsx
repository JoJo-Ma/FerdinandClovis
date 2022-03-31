import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './navbar.css'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
    window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav id="navigationBar">
      {
        (toggleMenu || screenWidth > 450) && (
          <ul  id="sideNav">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li>
              <a href="#expertise">WHAT WE DO</a>
            </li>
            <li>
              <a href="#portfolio">CLIENTS & PORTFOLIO</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        )
      }
      <div className="button">
        { toggleMenu ?
          <FontAwesomeIcon icon={faAngleUp} onClick={toggleNav} />
          :
          <FontAwesomeIcon icon={faBars} onClick={toggleNav} />
         }
      </div>

  </nav>
  )
}

export default NavBar;
