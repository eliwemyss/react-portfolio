import React from 'react';
import Project from './Project';
import data from '../info/projectInfo';
import styles from './styles/ProjectContainer.css';

const ProjectContainer = () => {
    let projects = data.map((proj, i) => {
        let bounceside = i%2 === 0;
        return (
            <div left={bounceside} right={!bounceside} key={i}>
                <Project order={i%2} {...proj}/>
            </div>
        );
    });
    return (
        <section id="projects" className={styles.container}>
            <h2>PROJECTS</h2>
            <div className={styles.wrapper}>
                {projects}
            </div>
        </section>
    );
}

export default ProjectContainer;