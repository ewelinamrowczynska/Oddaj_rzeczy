import React from 'react';
import HeaderImg from "./HeaderImg";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import Organizations from "./Organizations";
import Contact from "./Contact";
import OrganizationsList2 from "./OrganizationsList2";

const Home = () => {
    return (
        <>
            <HeaderImg />
            <HomeThreeColumns />
            <FourSteps />
            <AboutUs />
            <Organizations />
            <Contact />
            <OrganizationsList2 type="Fundacja"/>
        </>
    );
};

export default Home;