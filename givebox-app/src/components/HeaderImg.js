import React from 'react';
import heroImg from "../assets/heroImg.jpg";
import Nav from "./Nav";
import HomeHeader from "./HomeHeader";

const Header = () => {
    return (
        <div className="navi">
            <img className="hero-img" src={heroImg}/>
            <div className="header_content">
                <Nav/>
                <HomeHeader/>
            </div>
        </div>
    );
};

export default Header;