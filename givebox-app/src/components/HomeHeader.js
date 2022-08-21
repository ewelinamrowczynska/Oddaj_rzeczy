import React from 'react';
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.svg"

const HomeHeader = () => {
    return (
            <div className="homeHeader">
                <h2 className="title">
                    Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h2>
                <img className="decoration" src={decoration} />
                <div className="buttons">
                    <button className="big-btn">
                        <Link to="/log-in">Oddaj<br />rzeczy</Link>
                    </button>
                    <button className="big-btn"><Link to="/log-in">Zorganizuj<br />zbiórkę</Link></button>
                </div>
            </div>
    );
};

export default HomeHeader;