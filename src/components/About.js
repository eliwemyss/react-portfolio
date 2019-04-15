import React from 'react';
import './styles/About.css';
import data from '../info/aboutMe';

const About = () => {
    let paragraphs = data.description.map((para, i) => <p key={i} className="para" dangerouslySetInnerHTML={{ __html: para }}></p>);

    return (
        <section id="about" className="aboutSection">
            <h2>ABOUT</h2>
                <div className="flexRow">
                    <div className="imgContainer">
                        <p className="tagLine">{data.tagline}</p>
                    </div>
                    <div className="flexCol">
                        {paragraphs}
                    </div>
                </div>
        </section>
    );
}

export default About;