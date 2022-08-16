import React from 'react';
import decoration from "../assets/decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg";

const AboutUs = () => {
    return (<div className="aboutUs">
        <div className="aboutUs__content">
            <h2 className="aboutUs__title title">O nas</h2>
            <img className="decoration" src={decoration}/>
            <span className="aboutUs__text">Nori grape silver beet broccoli kombu beet<br/>
                    greens fava bean potato quandong celery.<br/>
                    Bunya nuts black-eyed pea prairie turnip leek<br/>
                    lentil turnip greens parsnip.
                    <img className="signature-img" src={Signature}/>
            </span>
        </div>
        <img className="people-img" src={People}/>

    </div>);
};

export default AboutUs;