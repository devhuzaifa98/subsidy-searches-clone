import React from 'react';
import Footer from '../../components/shared/Footer';
import Afford from './Afford';
import ApplySticky from './ApplySticky';
import Carriers from './Carriers';
import FAQ from './FAQ';
import Hero from './Hero';
import Process from './Process';
import WaitingFor from './WaitingFor';
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
            <WaitingFor />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
