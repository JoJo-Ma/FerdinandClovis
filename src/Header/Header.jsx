import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LazyBackroundImage from '../util/LazyBackroundImage';

import './header.css';

const background = '/static/images/I_Header/header.jpg';
const placeholder = '/static/images/I_Header/header_placeholder.jpg';
const overlay = 'radial-gradient(ellipse at 50% 30%, rgba(10,22,40,0.15), rgba(10,22,40,0.55) 70%, rgba(10,22,40,0.75))';

function Header() {
    return (
        <LazyBackroundImage
            className="header"
            source={background}
            placeholder={placeholder}
            options={overlay}
        >
            <motion.div
                className="header-signature-wrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
            >
                <LazyLoadImage src="/static/images/I_Header/signature.png" alt="Ferdinand Clovis" id="signature" effect="opacity" />
            </motion.div>
        </LazyBackroundImage>
    );
}

export default Header;
