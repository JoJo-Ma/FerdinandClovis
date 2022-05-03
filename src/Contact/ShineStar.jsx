import React, { useState, useRef, useEffect } from 'react';


import './shinestar.css'

const ShineStar = ({className, text}) => {
  const elRef = useRef()
  const [stars, setStars] = useState(<></>)

  const generateStars = () => {
    var result = []
    for (var index = 0; index < 7; index++) {
      result.push(<i style={randomStarStyle()} className='star'></i>)
    }
    return result
  }

  const randomStarStyle = () => {

    var posX = Math.floor(Math.random() * elRef.current.offsetWidth * 0.6) + 0.2 * elRef.current.offsetWidth
    var posY = Math.floor(Math.random() * elRef.current.offsetHeight * 0.6) + 0.2 * elRef.current.offsetHeight
    var rotation = Math.random() * 180
    var delay = Math.random() * 1
    var scale = Math.random() * 0.2
    return {
      left : `${posX}px`,
      top : `${posY}px`,
      transform : `rotate(${rotation}deg) scale(${scale})`,
      animationDelay : `${delay}s`
    }
  }

  useEffect(() => {
    if (!elRef.current) return
    setStars(generateStars())
  }, [elRef])


  return (
    <p ref={elRef} className={className}>{text}{stars}</p>
  )
}

export default ShineStar;
