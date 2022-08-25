import React, {useState} from 'react';
import OrganizationsList from "./OrganizationsList";
import Title from "./Title";

const Organizations = () => {
    const [foundClicked, setFoundClicked] = useState(true);
    const [orgClicked, setOrgClicked] = useState(false);
    const [localClicked, setLocalClicked] = useState(false);
    const [id, setID] = useState("Organizacja pozarządowa");

    const foundBtn = () => {
        setFoundClicked(true);
        setOrgClicked(false);
        setLocalClicked(false);
    }
    const orgBtn = () => {
        setFoundClicked(false);
        setOrgClicked(true);
        setLocalClicked(false);
            }
    const localBtn = () => {
        setFoundClicked(false);
        setOrgClicked(false);
        setLocalClicked(true);
    }
    return (
        <div className="orgnizations_container">
           <Title title="Komu pomagamy?" />
            <div className="organizations__buttons">
                <button className="big-btn" onClick={() => setID("Organizacja pozarządowa")}>Fundacjom</button>
                <button className="big-btn" onClick={() => setID(2)}>Organizacjom pozarządowym</button>
                <button className="big-btn" onClick={() => setID(3)}>Lokalnym zbiórkom</button>
            </div>
            <span className="organizations__text">  {foundClicked ?
              'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. ' +
                'Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.' : ''}
                {orgClicked ?
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
                    ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.' : ''}
                {localClicked ?
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
                    'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.' : ''}
            </span>
                <div className="organizations__list">
                    <OrganizationsList type={id} />
                </div>

        </div>
    );
};

export default Organizations;