import React from 'react';
import PickACard from './PickACard';
import Logos from './Logos';

import './portfolio.css';

function Portfolio() {
    return (
        <div id="portfolio">
            <h2>A rich portfolio of experiences, events and performances</h2>
            <PickACard />
            <Logos />
            {/* <div className="view-all">
        <Link id="view-all-link" to="/all">View all</Link>
      </div> */}
        </div>
    );
}

export default Portfolio;
