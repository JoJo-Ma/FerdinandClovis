import React from 'react';
import { motion } from 'framer-motion';
import Slideshow from './Slideshow';

import LazyBackroundImage from '../util/LazyBackroundImage';
import './about.css';

const background = '/static/images/III_Who_Are_We/about_background.jpg';
const placeholder = '/static/images/III_Who_Are_We/about_background_placeholder.jpg';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] } },
};

function About() {
    return (
        <LazyBackroundImage
            id="about"
            className="about-section"
            source={background}
            placeholder={placeholder}
        >
            <motion.div
                className="about-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-15% 0px' }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
                <motion.h1 className="about-headline" variants={fadeUp}>
                    Never stop
                    {' '}
                    <em className="italic-accent">dreaming</em>
                    ,
                    <br />
                    exploring,
                    {' '}
                    <em className="italic-accent">creating</em>
                    !
                </motion.h1>

                <motion.div className="about-body" variants={fadeUp}>
                    <p className="about-lede">
                        Engineer, entrepreneur and athlete...
                        {' '}
                        <strong>Ferdinand Clovis</strong>
                        {' '}
                        is not only a Magician but a unique creator,
                        motivational speaker and influencer merging Arts with extreme sports,
                        and has performed in more than 1000 performances in 50 countries
                        over 20 years of staging!
                    </p>
                </motion.div>

                <motion.div className="about-slideshow" variants={fadeUp}>
                    <Slideshow />
                </motion.div>
            </motion.div>
        </LazyBackroundImage>
    );
}

export default About;
