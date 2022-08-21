import React from 'react';
import OrganizationsList from "./OrganizationsList";
import decoration from "../assets/decoration.svg";

const Organizations = () => {
    return (
        <div className="orgnizations_container">
            <h2 className="organizations__title title">Komu pomagamy?</h2>
            <img className="decoration" src={decoration}/>
            <div className="organizations__buttons">
                <button className="big-btn">Fundacjom</button>
                <button className="big-btn">Organizacjom pozarządowym</button>
                <button className="big-btn">Lokalnym zbiórkom</button>
            </div>
            <span className="organizations__text">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </span>
            <div className="organizations__list">
                <OrganizationsList type="Fundacja"/>
            </div>
        </div>
    );
};

export default Organizations;