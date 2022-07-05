import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';

import LazyBackroundImage from '../util/LazyBackroundImage'

import "react-slideshow-image/dist/styles.css"
import './about.css'
import data from './data.js'

const Slideshow = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return () => {
    window.removeEventListener('resize', changeWidth)
    }

  }, [screenWidth])

  const style = screenWidth > 1100 ? { maxWidth : '750px'} : { maxWidth : 0.9 * screenWidth + 'px', height: (0.9 * screenWidth / 1.5) + "px"}


  return (
    <div className="slideshow-container child-about"
      style={style}>
      <Slide easing="ease">
        {
          data.map((el,index) => {
            return <div className="each-slide" key={index}>
              <LazyBackroundImage source={`${process.env.PUBLIC_URL}${el.img}`} placeholder={el.imgPlaceholder} >
                <span>{el.text}</span>
                <span className="placeholder">placeholder</span>
              </LazyBackroundImage>
            </div>
          })
        }
      </Slide>
    </div>
  )
}

export default Slideshow;
