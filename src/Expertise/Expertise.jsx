import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


import data from './data.js'
import './expertise.css'

const Expertise = () => {
  const [services, setServices] = useState(data)
  const [toggle, setToggle] = useState(true)

  const handleClick = (index) => {
    if (toggle) {
      setServices(services.map(service =>  service.index === index ? { ...service, visibility:'visible', opacity:'1', position:"relative"} : service ))
      setToggle(!toggle)
    } else {
      setServices(services.map(service =>  service.index === index ? { ...service, visibility:'hidden', opacity:'0', position:"absolute"} : service ))
      setToggle(!toggle)
    }
  }

  return (
    <div id="expertise">
      <h2>I don't predict the Future, We create it</h2>
      <div className="container-flex">
        {
          services.map((el, index) => {
            return (
              <div className="child-expertise" key={index} onClick={() => handleClick(index)}>
                  <LazyLoadImage className="img" src={`${el.img}`} alt={el.header} placeholderSrc={`${el.imgPlaceholder}`} effect="blur" />
                  <div className="child-expertise-textblock">
                    <h3 className={el.visibility} >{el.header}</h3>
                    <p className={el.visibility} style={{display:el.visibility, opacity:el.opacity, position:el.position}}>{el.text}</p>

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Expertise;
