import React from 'react';
import decoration from "../assets/decoration.svg";
import bgContactForm from "../assets/bgContactForm.jpg";


const Contact = () => {
    return (
        <div className="contact__container">


            <form className="form">
                <h2>Skontaktuj się z nami</h2>
                <img className="decoration" src={decoration}/>
                <div className="form__first-line">
                    <div className="form__input">
                        <label>Wpisz swoje imię</label><input placeholder="Ewelina"></input></div>
                    <div className="form__input">
                        <label>Wpisz swój email</label><input placeholder="abc@xyz.pl"></input>
                    </div>
                </div>
                <label>Wpisz swoją wiadomość</label>
                <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                </textarea>
            </form>

        </div>
    );
};

export default Contact;