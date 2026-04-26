import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import data from './data.js';

function Logos() {
    return (
        <section className="logos-section">
            <h3 className="logos-eyebrow">
                Like them: go further, go deeper, go beyong reality
            </h3>
            <div className="logos-grid">
                {data.companyLogos.map((logo) => (
                    <div className="logos-grid-item" key={logo.index}>
                        <LazyLoadImage src={logo.img} alt={logo.alt} effect="opacity" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Logos;
