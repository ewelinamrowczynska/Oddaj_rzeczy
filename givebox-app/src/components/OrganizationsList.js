import React from 'react';
import organizations from "../organizations.json";

const OrganizationsList = (props) => {
    const getOrganization = (type) => {
        fetch("../organizations.json").then(response => response.json())
            .then(data => data.organizations.map(elem => {
            if (elem.type === type) {
                console.log(elem.type);
                return (
                    <div className="table">
                        <table>
                            <tr>
                                <td>
                                    <span className="org-name title">{elem.type} {elem.name}</span>
                                    <span className="org-mission">{elem.mission}</span>
                                </td>
                                <td><span className="org-needs">{elem.needs}</span></td>
                            </tr>
                        </table>
                    </div>

                )
            } else return (
                <span className="title">Aktualnie brak {elem.type} w bazie
                </span> )
        }))
    }

    return ( getOrganization("Fundacja")
    );
};

export default OrganizationsList;