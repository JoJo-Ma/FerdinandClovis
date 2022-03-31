import React from 'react';
import PickACard from './PickACard'
import Logos from './Logos'

import './portfolio.css'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>A rich portfolio of experiences, events and performances</h2>
      <PickACard />
      <Logos />
      <div className="view-all">
        <a id="view-all-link" href="">View all</a>
      </div>
    </div>
  )
}

export default Portfolio
