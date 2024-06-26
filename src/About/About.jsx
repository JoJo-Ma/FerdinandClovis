import React from 'react';
import Slideshow from './Slideshow';

import LazyBackroundImage from '../util/LazyBackroundImage';
import './about.css';

const background = '/static/images/III_Who_Are_We/about_background.jpg';
const placeholder = '/static/images/III_Who_Are_We/about_background_placeholder.jpg';

function About() {
    return (
        <LazyBackroundImage id="about" source={background} placeholder={placeholder}>
            <h1>Never stop dreaming, exploring, creating!</h1>
            <div className="container-flex container-about">
                <div className="child-about">
                    <p>
Engineer, entrepreneur and athlete...
                        <strong>Ferdinand Clovis</strong>
                        {' '}
is not only a Magician but a unique creator,
motivational speaker and influencer merging Arts with extreme sports,
and has performed in more than 1000 performances in 50 countries over 20 years of staging!
                    </p>
                </div>
                <Slideshow />
            </div>
        </LazyBackroundImage>
    );
}

export default About;
