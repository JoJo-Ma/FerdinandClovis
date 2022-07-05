import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


import data from './data.js'

const Logos = () => {
  return (
    <>
      <h3>Like them: go further, go deeper, go beyong reality</h3>
      <div className="container-flex">
        {
          data.companyLogos.map(logo => {
            return (
              <div className="child-portfolio" key={logo.index}>
                <LazyLoadImage src={`${process.env.PUBLIC_URL}${logo.img}`} alt={logo.alt} effect="opacity" />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Logos;
