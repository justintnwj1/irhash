import { useState, useEffect } from 'react';
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug, faCogs, faIndustry } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title title">
                About Me
            </div>

            <div className="about-content">
                <div className="about-text">
                    <div className="circuit-decoration top-left"></div>
                    <div className="circuit-decoration top-right"></div>

                    <div className="icon-banner">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faPlug} />
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCogs} />
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faIndustry} />
                        </div>
                    </div>

                    <p>Electrical engineer with a strong focus on Power system and control systems. With experiences in designing electrical power systems and industrial automation.
                        I was graduate from Trisakti University at 2022 with a GPA of 3.41. In my campus I bring 2 years of hands-on experience as a Laboratory Assistant. And I served as Head of the Division of Research and Development for 1 year in Electrical Engineering Student Association.
                    </p>
                    <p>Currently, I work as an Electrical Engineer at Citasys in the engineering, procurement, and construction (EPC) field, where I apply my expertise to deliver reliable and efficient engineering solutions.</p>

                    <div className="circuit-decoration bottom-left"></div>
                    <div className="circuit-decoration bottom-right"></div>
                </div>
            </div>
        </div>
    )
}

export default About