import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


import data from './data.js'
import './expertise.css'

const Expertise = () => {

  return (
    <div id="expertise">
      <h2>I don't predict the Future, We create it</h2>
      <div className="container-flex">
        {
          data.map((el, index) => {
            return (
              <div className="child-expertise" key={index}>
                  <LazyLoadImage src={el.img} alt={el.header} placeholderSrc={el.imgPlaceholder} effect="blur" />
                  <div className="child-expertise-textblock">
                    <h3>{el.header}</h3>
                    <p>{el.text}</p>
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
