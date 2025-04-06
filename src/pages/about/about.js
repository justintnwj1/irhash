import { useState, useEffect } from 'react';
import "./about.css";
import spi from "../../assets/spi.jpg";

 const About = () => {
    
     return (
         <div className='about'>
             <div class="about-title title">About Me</div>
             <div class="about-content">
                 <div class="about-text">
                    <p>Electrical engineer with a strong focus on Power system analysis and automation systems. With experiences in both industrial plant and coal mining environments, I bring a proven track record of developing and optimizing electrical systems. Skilled in ETAP, PLC, and Project Management.</p>
                     <p>Served as a Laboratory Assistant for 2 years, Complete my bachelor degree in Electrical Engineering with a 3.41 GPA, Served as head of division of research and development for 1 year.</p>
                      {/* <div class="skills">
                         <span class="skill-tag">Problem Solving</span>
                         <span class="skill-tag">Project Management</span>
                         <span class="skill-tag">Adaptability</span>
                     </div> */}
                 </div>
                 <div class="about-image">
                     <div class="about-image-wrapper">
                         <img src={spi} alt="Foto Profil" />
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default (About)