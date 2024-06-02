import React from 'react';
import Footer from '../../components/shared/Footer';
import About from './About';
import Afford from './Afford';
import ApplySticky from './ApplySticky';
import Carriers from './Carriers';
import Hero from './Hero';
import Process from './Process';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <>
            <ApplySticky />
            <div className="flex min-h-screen flex-col">
                <Hero />
            </div>
            <Carriers />
            <Process />
            <Afford />
            <WhyUs />
            <About />
            <Footer />
        </>
    );
};

export default Home;
