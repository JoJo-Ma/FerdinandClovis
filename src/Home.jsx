import React from 'react';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import About from './About/About';
import Expertise from './Expertise/Expertise';
import Transition from './Transition/Transition';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function Home() {
    return (
        <>
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
