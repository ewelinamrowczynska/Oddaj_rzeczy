import React from 'react';
import Title from "./Title";

const Contact = () => {
    return (
        <div className="contact">
            <div className="bg-img">
            </div>
        <div className="contact__container">
            <form className="form">
                <Title title="Skontaktuj się z nami"/>
                <div className="form__first-line">
                    <div className="form__input">
                        <label>Wpisz swoje imię</label><input placeholder="Ewelina"></input></div>
                    <div className="form__input">
                        <label>Wpisz swój email</label><input placeholder="abc@xyz.pl"></input>
                    </div>
                </div>
                <label>Wpisz swoją wiadomość</label>
                <textarea
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
            </form>
        </div>
        </div>
    );
};

export default Contact;