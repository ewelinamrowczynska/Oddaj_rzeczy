import React from 'react';
import decoration from "../assets/decoration.svg";

const Title = ({title}) => {
    return (
        <div className="section-title">
            <h2 className="aboutUs__title title">{title}</h2>
            <img className="decoration" src={decoration}/>
        </div>
    );
};

export default Title;