import React from 'react';
import Nav from "./Nav";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";
import HeaderImg from "./HeaderImg";
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
            <AboutUs />
            <Organizations />
            <Contact />
        </>
    );
};

export default Home;