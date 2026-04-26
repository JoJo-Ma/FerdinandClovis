import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import data from './data.js';
import './expertise.css';

function Expertise() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = data[activeIndex];

    return (
        <section id="expertise" className="section expertise-section">
            <div className="expertise-head">
                <h2 className="expertise-headline">
                    I don&rsquo;t predict the
                    {' '}
                    <em className="italic-accent">Future</em>
                    , We create it
                </h2>
            </div>

            <div className="expertise-layout">
                <ol className="expertise-list">
                    {data.map((service, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <li
                                key={service.index}
                                className={`expertise-row ${isActive ? 'is-active' : ''}`}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onFocus={() => setActiveIndex(idx)}
                            >
                                <button
                                    type="button"
                                    className="expertise-row-button"
                                    onClick={() => setActiveIndex(idx)}
                                    aria-expanded={isActive}
                                >
                                    <span className="expertise-num">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="expertise-title">{service.header}</span>
                                    <span className="expertise-spacer" />
                                    <span className="expertise-marker" aria-hidden="true" />
                                </button>

                                <div className="expertise-mobile-preview" aria-hidden={!isActive}>
                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.div
                                                key="content"
                                                className="expertise-content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: [0.22, 0.61, 0.36, 1],
                                                }}
                                            >
                                                <div className="expertise-content-inner">
                                                    <LazyLoadImage
                                                        src={service.img}
                                                        placeholderSrc={service.imgPlaceholder}
                                                        alt={service.header}
                                                        effect="blur"
                                                        className="expertise-mobile-thumb"
                                                    />
                                                    <p className="expertise-text">{service.text}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                <aside className="expertise-preview" aria-hidden="true">
                    <div className="expertise-preview-frame">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.index}
                                className="expertise-preview-image"
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                                style={{ backgroundImage: `url(${activeService.img})` }}
                            />
                        </AnimatePresence>
                        <div className="expertise-preview-overlay" />
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={`txt-${activeService.index}`}
                                className="expertise-preview-text"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                            >
                                {activeService.text}
                            </motion.p>
                        </AnimatePresence>
                        <div className="expertise-preview-meta">
                            <span className="expertise-preview-num">
                                {String(activeIndex + 1).padStart(2, '0')}
                                {' / '}
                                {String(data.length).padStart(2, '0')}
                            </span>
                            <span className="expertise-preview-title">
                                {activeService.header}
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Expertise;
