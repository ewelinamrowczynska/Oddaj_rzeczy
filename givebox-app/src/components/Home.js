import React from 'react';
import HeaderImg from "./HeaderImg";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import Organizations from "./Organizations";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <HeaderImg />
            <HomeThreeColumns />
            <FourSteps />
            <AboutUs name="Kowal"/>
            <Organizations />
            <Contact />
        </>
    );
};

export default Home;