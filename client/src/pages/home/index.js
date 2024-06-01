import React from 'react';
import Footer from '../../components/shared/Footer';
import Navbar from '../../components/shared/Navbar';
import About from './About';
import ApplySticky from './ApplySticky';
import Carriers from './Carriers';
import Hero from './Hero';
import Process from './Process';

const Home = () => {
    return (
        <>
            <ApplySticky />
            <div className="flex min-h-screen flex-col">
                <Hero />
            </div>
            <Carriers />
            <Process />
            <About />
            <Footer />
        </>
    );
};

export default Home;
