import React, { useEffect } from 'react';
import Lenis from 'lenis';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import About from './About/About';
import Expertise from './Expertise/Expertise';
import Transition from './Transition/Transition';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Home() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
            smoothWheel: true,
            smoothTouch: false,
        });

        let frame;
        const raf = (time) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <div className="grain-overlay" aria-hidden="true" />
            <NavBar />
            <Header />
            <About />
            <Expertise />
            <Transition />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
