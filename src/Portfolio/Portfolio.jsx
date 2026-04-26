import React from 'react';
import PickACard from './PickACard';
import Logos from './Logos';

import './portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-head">
                <h2 className="portfolio-headline">
                    A rich portfolio of experiences,
                    {' '}
                    <em className="italic-accent">events</em>
                    {' '}
                    and performances
                </h2>
            </div>
            <PickACard />
            <Logos />
        </section>
    );
}

export default Portfolio;
