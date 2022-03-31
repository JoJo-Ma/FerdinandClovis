import React from 'react';

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
                <img src={logo.img} alt={logo.alt} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Logos;
