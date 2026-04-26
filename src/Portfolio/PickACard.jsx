/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import {
    motion, AnimatePresence, useReducedMotion,
} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import data from './data.js';
import './card.css';

const FAN_TRANSFORMS = [
    { rotate: 26, x: -68, y: 26 },
    { rotate: 16, x: -42, y: 10 },
    { rotate: 9, x: -17, y: 1 },
    { rotate: 0, x: 12, y: -6 },
    { rotate: -8, x: 40, y: -7 },
    { rotate: -14, x: 63, y: -3 },
    { rotate: -19, x: 86, y: 1 },
];

function FanCard({
    card, fanIndex, onPick, isPicking, reduceMotion,
}) {
    const t = FAN_TRANSFORMS[fanIndex] || FAN_TRANSFORMS[FAN_TRANSFORMS.length - 1];
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mx', `${mx}%`);
        el.style.setProperty('--my', `${my}%`);
    };

    const handleDragEnd = (_event, info) => {
        const distance = Math.hypot(info.offset.x, info.offset.y);
        const speed = Math.hypot(info.velocity.x, info.velocity.y);
        if (distance > 80 || speed > 400) {
            onPick(card.index);
        }
    };

    return (
        <motion.div
            ref={cardRef}
            className="fan-card"
            style={{
                '--i': fanIndex,
                touchAction: 'none',
                backgroundImage: `url(${card.back})`,
            }}
            transformTemplate={({
                rotate = '0deg',
                x = '0px',
                y = '0px',
                scale = 1,
                rotateY = '0deg',
            }) => `rotate(${rotate}) translate(${x}, ${y}) scale(${scale}) rotateY(${rotateY})`}
            onMouseMove={handleMouseMove}
            onClick={() => !isPicking && onPick(card.index)}
            drag={!isPicking}
            dragSnapToOrigin
            dragElastic={0.4}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            initial={reduceMotion
                ? {
                    opacity: 0,
                    x: t.x,
                    y: t.y,
                    rotate: t.rotate,
                }
                : {
                    opacity: 0,
                    x: 600,
                    y: 0,
                    rotate: t.rotate + 30,
                    scale: 0.92,
                }}
            animate={{
                opacity: 1,
                x: t.x,
                y: t.y,
                rotate: t.rotate,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                y: t.y - 240,
                scale: 1.18,
                rotateY: 90,
                transition: { duration: 0.45, ease: [0.7, 0, 0.84, 0] },
            }}
            transition={{
                type: 'spring',
                stiffness: 110,
                damping: 18,
                delay: reduceMotion ? 0 : fanIndex * 0.12,
            }}
            whileHover={reduceMotion ? {} : {
                y: t.y + 38,
                transition: { type: 'spring', stiffness: 280, damping: 22 },
            }}
            whileTap={{ scale: 0.97 }}
        >
            <span className="fan-card-foil" aria-hidden="true" />
            <span className="fan-card-inner-edge" aria-hidden="true" />
        </motion.div>
    );
}

function FlipCard({ card, size }) {
    return (
        <div className={`flip-card flip-card-${size}`}>
            <div className="flip-card-inner">
                <div className="flip-card-face flip-card-back">
                    <LazyLoadImage src={card.back} alt="" effect="opacity" />
                    <span className="flip-card-edge" aria-hidden="true" />
                </div>
                <div className="flip-card-face flip-card-front">
                    <LazyLoadImage src={card.front} alt={card.caption} effect="opacity" />
                    <a
                        href={card.ref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flip-card-link"
                    >
                        <span className="flip-card-link-text">{card.caption}</span>
                        <span className="flip-card-link-arrow" aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

function RevealedCard({ card }) {
    return (
        <a
            href={card.ref}
            target="_blank"
            rel="noopener noreferrer"
            className="revealed-card"
        >
            <LazyLoadImage src={card.front} alt={card.caption} effect="opacity" />
            <span className="revealed-card-overlay" aria-hidden="true" />
            <span className="revealed-card-caption">
                <span className="revealed-card-caption-text">{card.caption}</span>
                <span className="revealed-card-caption-arrow" aria-hidden="true">→</span>
            </span>
        </a>
    );
}

function PickACard() {
    const [deck, setDeck] = useState(data.cards);
    const [picked, setPicked] = useState([]);
    const [modalCard, setModalCard] = useState(null);
    const [isPicking, setIsPicking] = useState(false);
    const reduceMotion = useReducedMotion();

    const handlePick = (index) => {
        if (isPicking) return;
        const selected = deck.find((c) => c.index === index);
        if (!selected) return;
        setIsPicking(true);
        setDeck(deck.filter((c) => c.index !== index));
        setPicked((prev) => [...prev, selected]);
        setTimeout(() => {
            setModalCard(selected);
            setIsPicking(false);
        }, reduceMotion ? 0 : 380);
    };

    const closeModal = () => setModalCard(null);

    const reset = () => {
        setDeck(data.cards);
        setPicked([]);
        setModalCard(null);
    };

    const orderedPicks = [...picked].reverse();

    return (
        <>
            <div className="pick-a-card-stage">
                <h3 className="pick-a-card-title">Find Ferdinand on the web</h3>

                <div className="pick-a-card-deck">
                    <AnimatePresence>
                        {deck.map((card) => {
                            const fanIndex = data.cards.findIndex((c) => c.index === card.index);
                            return (
                                <FanCard
                                    key={card.index}
                                    card={card}
                                    fanIndex={fanIndex}
                                    onPick={handlePick}
                                    isPicking={isPicking}
                                    reduceMotion={reduceMotion}
                                />
                            );
                        })}
                    </AnimatePresence>

                    {deck.length === 0 && (
                        <motion.button
                            type="button"
                            className="resetButton"
                            onClick={reset}
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Play again!
                        </motion.button>
                    )}
                </div>

                {picked.length > 0 && (
                    <a href="#card-deck" className="arrowDown" aria-label="Scroll to picked cards">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                )}
            </div>

            {picked.length > 0 && (
                <div className="card-deck-section" id="card-deck">
                    <motion.div
                        className="card-deck-grid"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {orderedPicks.map((card) => (
                            <motion.div
                                key={card.index}
                                className="card-deck-item"
                                variants={{
                                    hidden: { opacity: 0, y: 24, rotateZ: -4 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        rotateZ: 0,
                                        transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
                                    },
                                }}
                            >
                                <RevealedCard card={card} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            )}

            <AnimatePresence>
                {modalCard && (
                    <motion.div
                        className="modal-card"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        onClick={closeModal}
                        role="presentation"
                    >
                        <motion.div
                            className="modal-card-content"
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 0.61, 0.36, 1],
                                delay: 0.05,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-label={modalCard.caption}
                        >
                            <button
                                type="button"
                                className="modal-card-close"
                                onClick={closeModal}
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <FlipCard card={modalCard} size="modal" />
                            <p className="modal-card-hint">Hover the card to reveal</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default PickACard;
