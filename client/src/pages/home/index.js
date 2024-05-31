import React from "react";
import Hero from "./Hero";
import Process from "./Process";
import About from "./About";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import ApplySticky from "./ApplySticky";
import Carriers from "./Carriers";

const Home = () => {
  return (
    <>
      <ApplySticky />
      <div className="min-h-screen flex flex-col">
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
