import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './styles/Technology.css';

const Technology = ({ tech }) => {
    let useHeadings = tech.length > 1;
    let techdata = tech.map(techGroup => {
        return (
            <div className="column" key={techGroup.category}>
                {useHeadings ? <h5 className="catHeading" dangerouslySetInnerHTML={{ __html: techGroup.category }}></h5> : null}
                <ul className="list">
                    {techGroup.techs.map(tech => <li className="techItem" key={tech}>{tech}</li>)}
                </ul>
            </div>
        );
    });

    return (
        <div>
            <h4 className="techHeading">
                <FontAwesomeIcon icon={faCode} className="icon" />
                Technology
                <FontAwesomeIcon icon={faCode} className="icon" />
            </h4>
            <div className="container">
                {techdata}
            </div>
        </div>
    );
}

export default Technology;