import React from 'react';
import Technology from './Technology';
import './styles/Project.css';

const Project = (props) => {

    return (
        <div className="project">
            <h3 className="title">{props.title}</h3>
            <div className="flexRow">
                <div className="imgContainer">
                    <img className="screenshot" src={props.screenshot} alt={props.title + " Screenshot"} />
                </div>
                <div className="flexCol">
                    <p className="para" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                    <Technology tech={props.technology} />
                    <div className="btnCont">
                        <a href={props.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                            LIVE DEMO
                        </a>
                        <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer" className="btn">
                            GITHUB REPO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;