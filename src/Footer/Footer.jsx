import React, {
    useRef, useEffect, useState,
} from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook, faWhatsapp, faYoutube, faInstagram, faLinkedin, faStrava,
} from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './footer.css';

const HOUDINI_LINES = [
    'Keep up your enthusiasm.',
    'There is nothing more contagious',
    'than exuberant enthusiasm.',
];

const QUOTE_TEXT = HOUDINI_LINES.join(' ');

const SOCIALS = [
    { icon: faYoutube, href: 'https://www.youtube.com/channel/UCaqZexnOgRg9lpsYfV6PcxQ', label: 'YouTube' },
    { icon: faInstagram, href: 'https://www.instagram.com/the_magic_runner/?hl=en', label: 'Instagram' },
    { icon: faFacebook, href: 'https://www.facebook.com/FerdinandClovis/', label: 'Facebook' },
    { icon: faLinkedin, href: 'https://hk.linkedin.com/in/ferdinandclovis', label: 'LinkedIn' },
    { icon: faStrava, href: 'https://www.strava.com/athletes/34867518', label: 'Strava' },
];

const whatsappContactImgUrl = '/static/images/whatsapp_contact.jpg';

function TypingQuote() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-15% 0px' });
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        if (!inView) return undefined;
        let i = 0;
        const interval = setInterval(() => {
            i += 1;
            setDisplayed(QUOTE_TEXT.slice(0, i));
            if (i >= QUOTE_TEXT.length) clearInterval(interval);
        }, 28);
        return () => clearInterval(interval);
    }, [inView]);

    const isComplete = inView && displayed.length >= QUOTE_TEXT.length;

    return (
        <blockquote className="footer-quote" ref={ref}>
            <span className="footer-quote-mark footer-quote-mark-open" aria-hidden="true">&ldquo;</span>
            <span className="footer-quote-text">
                {displayed}
                {inView && displayed.length < QUOTE_TEXT.length && (
                    <span className="footer-quote-cursor" aria-hidden="true" />
                )}
            </span>
            <span
                className={`footer-quote-mark footer-quote-mark-close ${isComplete ? 'is-visible' : ''}`}
                aria-hidden="true"
            >
                &rdquo;
            </span>
        </blockquote>
    );
}

function Footer() {
    const [showWhatsapp, setShowWhatsapp] = useState(false);

    return (
        <footer className="footer-section">
            <div className="footer-quote-wrap">
                <span className="footer-rule" aria-hidden="true" />
                <TypingQuote />
                <cite className="footer-attribution">— Harry Houdini</cite>
                <span className="footer-rule" aria-hidden="true" />
            </div>

            <div className="footer-meta">
                <div className="footer-meta-block">
                    <img
                        src="/static/images/I_Header/signature.png"
                        alt="Ferdinand Clovis"
                        className="footer-signature"
                    />
                </div>

                <div className="footer-meta-block footer-socials">
                    <h5 className="footer-meta-eyebrow">Follow Ferdinand on social media</h5>
                    <ul>
                        <li>
                            <button
                                type="button"
                                className="footer-social-link"
                                onClick={() => setShowWhatsapp(true)}
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>Whatsapp</span>
                            </button>
                        </li>
                        {SOCIALS.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                >
                                    <FontAwesomeIcon icon={s.icon} />
                                    <span>{s.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <AnimatePresence>
                {showWhatsapp && (
                    <motion.div
                        className="modal-whatsapp"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setShowWhatsapp(false)}
                        role="presentation"
                    >
                        <motion.div
                            className="modal-whatsapp-content"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-label="WhatsApp QR code"
                        >
                            <button
                                type="button"
                                className="modal-whatsapp-close"
                                onClick={() => setShowWhatsapp(false)}
                                aria-label="Close"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <LazyLoadImage
                                effect="opacity"
                                src={whatsappContactImgUrl}
                                alt="QR code WhatsApp"
                                className="modal-whatsapp-img"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}

export default Footer;
