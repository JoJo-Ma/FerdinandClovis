import React from 'react';
import { motion } from 'framer-motion';

import './transition.css';

function Transition() {
    return (
        <section className="transition-section">
            <motion.figure
                className="transition-figure"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-25% 0px' }}
                transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
                <blockquote className="transition-quote">
                    <span className="transition-mark transition-mark-open" aria-hidden="true">&ldquo;</span>
                    <em className="italic-accent">Reality</em>
                    {' '}
                    is created by the
                    {' '}
                    <em className="italic-accent">mind</em>
                    <span className="transition-mark transition-mark-close" aria-hidden="true">&rdquo;</span>
                </blockquote>
                <figcaption className="transition-attribution">
                    We can change our reality by changing our mind.
                </figcaption>
            </motion.figure>
        </section>
    );
}

export default Transition;
