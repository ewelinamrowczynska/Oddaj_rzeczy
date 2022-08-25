import React, {useEffect} from 'react';

const OrganizationsList2 = (type) => {
    useEffect(() => {
    (fetch("../organizations.json/organizations").then(resp => {
            return resp.json();
        }).then(data => {
            data.map(elem => {
                return (
                    <table>
                        <tr>
                            <td>
                                <span className="org-name title">{elem.type} {elem.name}</span>
                                <span className="org-mission">{elem.mission}</span>
                            </td>
                            <td><span className="org-needs">{elem.needs}</span></td>
                        </tr>
                    </table>
                )
            }).join("");
        }).catch(error => {
            console.log(error);
        })
    ) });
};

export default OrganizationsList2;