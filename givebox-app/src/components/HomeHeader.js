import React from 'react';
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.svg"
import Title from "./Title";

const HomeHeader = ({title}) => {
    return (
            <div className="homeHeader">
                <Title title="Zacznij pomagać!
                  Oddaj niechciane rzeczy w zaufane ręce"/>
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