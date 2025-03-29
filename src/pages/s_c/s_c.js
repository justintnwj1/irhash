import { useState, useEffect } from 'react';
import "./s_c.css";
import allanbradley from "../../assets/rockwell.jpeg";
import autocad from "../../assets/autocad.jpeg";
import easergy from "../../assets/easergy.jpeg";
import easy from "../../assets/easy.jpeg";
import etap from "../../assets/etap.jpeg";
import factory from "../../assets/factory.jpeg";
import oracle from "../../assets/oracle.jpeg";
import panasonic from "../../assets/panasonic.jpeg";
import schneider from "../../assets/schneider.jpeg";
import siemens from "../../assets/siemens.jpeg";
import k3l from "../../assets/k3listrikcert.jpg";
import auto from "../../assets/etapcert.jpg";
import project from "../../assets/projectminicert.jpg";

const Skill = () => {
    const skillsData = [
        { name: "Allen Bradley Studio 5000", image: allanbradley, category: "Automation system" },
        { name: "Allen Bradley Factory Talk View", image: factory, category: "Automation system" },
        { name: "Panasonic FPWINPRO 7", image: panasonic, category: "Automation system" },
        { name: "Weintek Easy Builder", image: easy, category: "Automation system" },
        { name: "Siemens TIA portal", image: siemens, category: "Automation system" },
        { name: "ETAP", image: etap, category: "Power System" },
        { name: "Somove", image: schneider, category: "Power System" },
        { name: "Easergy", image: easergy, category: "Power System" },
        { name: "Primavera", image: oracle, category: "Other" },
        { name: "AutoCAD", image: autocad, category: "Other" },
    ];

    const certificateData = [
        { id: 1, name: "ETAP Power System Analysis For Electrical Engineers", image: auto, issued: "Udemy", date: "April 2024" },
        { id: 2, name: "Project Management Mini Bootcamp Batch 9", image: project, issued: "Zaada", date: "March 2025" },
        { id: 3, name: "Teknisi K3 Listrik", image: k3l, issued: "PT. MAIRODI MANDIRI SEJAHTERA", date: "October 2024" }
    ];

    const [activeModal, setActiveModal] = useState(null);

    // Open modal with specific company ID
    const openModal = (certId) => {
        setActiveModal(certId);
    };

    // Close modal
    const closeModal = () => {
        setActiveModal(null);
    };

    // Close modal when clicking outside
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay-cert')) {
            closeModal();
        }
    };

    return (
        <div className='skill'>
            <div class="skills-title title">Skills</div>
            <div className="services-grid">
                {skillsData.map((skill, index) => (
                    <div className="service-item" key={index}>
                        <div className="service-icon">
                            <img src={skill.image} alt={skill.name} />
                        </div>
                        <h3 className="service-title">{skill.name}</h3>
                        <p className="service-description">{skill.category}</p>
                    </div>
                ))}
            </div>
            <div class="certificates-title title">Professional Certifications</div>
            <div class="certificates-container">
                {certificateData.map((cert, index) => (
                    <div className="certificate-card" key={index} onClick={() => openModal(cert.id)}>
                        <h3>{cert.name} </h3>
                        <div class="issuer">{cert.issued}</div>
                        <div class="date">{cert.date}</div>
                        <div class="badge">
                            <img src={cert.image} alt={cert.name} />
                        </div>
                    </div>
                ))}
            </div>
            {activeModal && (
                <div
                    className={`modal-overlay-cert ${activeModal ? 'active' : ''}`}
                    onClick={handleOverlayClick}
                >
                    <div className="modal-cert">
                        <img src={certificateData.find(certificateData => certificateData.id === activeModal).image} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default (Skill)