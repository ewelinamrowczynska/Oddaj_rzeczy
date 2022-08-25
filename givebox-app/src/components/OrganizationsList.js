import React, {useState, useEffect} from 'react';
import getData from "../api";

const OrganizationsList = (props) => {
    const [orgs, setOrgs] = useState([]);
    useEffect(() => {
        getData().then((data) => setOrgs(data.organizations.filter(el => el.type === props.type)));
    }, []);
    return (
        <div className="table">
            <table>
                <tbody>
                    {
                        orgs.map((elem, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <span className="org-name title">{elem.type} {elem.name}</span>
                                        <span className="org-mission">{elem.mission}</span>
                                    </td>
                                    <td><span className="org-needs">{elem.needs}</span></td>
                                </tr>
                            )})
                    }
                </tbody>
            </table>
        </div>
    )
};

export default OrganizationsList;