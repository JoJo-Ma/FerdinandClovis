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

  const classNav =
    toggleMenu
    ?
    'visible'
    :
    'hidden'


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
        (true) && (
          <ul  id="sideNav" className={classNav}>
            <li onClick={toggleNav}>
              <a href="">HOME</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#about">ABOUT US</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#expertise">WHAT WE DO</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#portfolio">CLIENTS & PORTFOLIO</a>
            </li>
            <li onClick={toggleNav}>
              <a href="#contact">CONTACT US</a>
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
