import { useState, useEffect } from 'react';
import "./about.css";

const About = () => {
   
    return (
        <div className='about'>
            <div class="about-title title">About Me</div>
            <div class="about-content">
                <div class="about-text">
                    <p>Served as a Laboratory Assistant for 2 years, Complete my bachelor degree in Electrical Engineering with a 3.41 GPA, Served as head of division of research and development for 1 year.</p>
                    <div class="skills">
                        <span class="skill-tag">Problem Solving</span>
                        <span class="skill-tag">Project Management</span>
                        <span class="skill-tag">Adaptability</span>
                    </div>
                </div>
                <div class="about-image">
                    <div class="about-image-wrapper">
                        <img src="/api/placeholder/300/300" alt="Foto Profil" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (About)