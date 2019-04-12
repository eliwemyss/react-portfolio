import React from 'react';
import styles from './styles/Project.css';

const Project = (props) => {
    let flexOrder;
    if (props.order === 1) {
        flexOrder = styles.flexRight;
    }

    return (
        <div className={styles.project}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.flexRow}>
                <div className={`${styles.imgContainer} ${flexOrder}`}>
                    <img className={styles.screenshot} src={props.screenshot} alt={props.title + " Screenshot"} />
                </div>
                <div className={styles.flexCol}>
                    <p className={styles.para} dangerouslySetInnerHTML={{ __html: props.description }}></p>
                    <div className={styles.btnCont}>
                        <a href={props.liveLink} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                            LIVE DEMO
                        </a>
                        <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                            GITHUB REPO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;