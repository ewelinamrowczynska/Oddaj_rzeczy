import React from 'react';
import {Link} from "react-router-dom";
import decoration from "../assets/decoration.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

const FourSteps = () => {
    return (
        <div className="fourStepsContainer">
            <div className="fourSteps">
                <h2 className="fourStepsTitle title">Wystarczą 4 proste kroki</h2>
                <img className="decoration" src={decoration}/>
            </div>
            <div className="fourCol">
                <div className="fourCol__col">
                    <img className="icon" src={icon1}/>
                    <span className="colTitle">Wybierz rzeczy</span>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="fourCol__col">
                    <img className="icon" src={icon2}/>
                    <span className="colTitle">Spakuj je</span>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="fourCol__col">
                    <img className="icon" src={icon3}/>
                    <span className="colTitle">Zdecyduj komu chcesz pomóc</span>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className="fourCol__col">
                    <img className="icon" src={icon4}/>
                    <span className="colTitle">Zamów kuriera</span>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <button className="big-btn"><Link to="/log-in">Oddaj rzeczy</Link></button>
        </div>
    );
};

export default FourSteps;