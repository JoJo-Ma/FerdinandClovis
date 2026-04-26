import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './navbar.css';

const NAV_LINKS = [
    { to: '/#about', label: 'About' },
    { to: '/#expertise', label: 'What I do' },
    { to: '/#portfolio', label: 'Portfolio' },
    { to: '/#contact', label: 'Contact' },
];

function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav id="navigationBar" className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
            <div className="nav-inner">
                <Link to="/" className="nav-wordmark" onClick={() => setOpen(false)}>
                    <span className="nav-wordmark-italic">F</span>
                    erdinand
                    {' '}
                    Clovis
                </Link>

                <ul className="nav-links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <HashLink smooth to={link.to} onClick={() => setOpen(false)}>
                                {link.label}
                            </HashLink>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="nav-toggle"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    <FontAwesomeIcon icon={open ? faXmark : faBars} />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
