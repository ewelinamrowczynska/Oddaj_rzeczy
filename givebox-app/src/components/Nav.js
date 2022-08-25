import React from 'react';
import { Link } from "react-router-dom";
//import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    return (
        <div className="nav_container">
                <ul className="regOrLog">
                    <li className="btn"><Link to="/log-in">Zaloguj</Link></li>
                    <li className="btn"><Link to="/register">Załóż konto</Link></li>
                </ul>
                <ul className="menu">
                    <li className="menu_el">
                        <Link to="/">Start</Link>
                    </li>
                    <li className="menu_el">
                        <Link to="/what-about">O co chodzi?</Link>
                    </li>
                    <li className="menu_el">
                        <Link to="/about-us">O nas</Link>
                    </li>
                    <li className="menu_el"><Link to="/foundation-and-org">Fundacja i organizacje</Link></li>
                    <li className="menu_el"><Link to="/contact">Kontakt</Link></li>
                </ul>
        </div>
    );
};

export default Nav;