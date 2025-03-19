import { useState } from 'react';
import "./experience.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faXmark,faHandPointRight, faListCheck } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const [activeModal, setActiveModal] = useState(null);

    // Open modal with specific company ID
    const openModal = (companyId) => {
        setActiveModal(companyId);
    };

    // Close modal
    const closeModal = () => {
        setActiveModal(null);
    };

    // Close modal when clicking outside
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    // Company data
    const companies = [
        {
            id: 'pertamina',
            name: 'Pertamina',
            tagline: 'Illuminating Solutions for Tomorrow',
            points: [
                { icon: faHandPointRight, text: 'Assisted senior engineers in maintenance tasks.' },
                { icon: faHandPointRight, text: 'Analyze disturbances occurring in the electrical power system and provide new relay protection setting recommendations for improvement.' }
            ]
        },
        {
            id: 'citasys',
            name: 'PT. Cipta Total Solusindo (CITASys)',
            tagline: 'Illuminating Solutions for Tomorrow',
            points: [
                { icon: faHandPointRight, text: 'Managed electrical projects, ensured project compliance with industry standards and provided technical support.' },
                { icon: faHandPointRight, text: 'Conducted ETAP load flow, short circuit, and implementing relay protection and coordination analyses.' },
                { icon: faHandPointRight, text: 'Performed Factory Acceptance Tests (FAT), Site Acceptance Tests (SAT), and commissioning procedures.' },
                { icon: faHandPointRight, text: 'Conducted troubleshoot electrical systems, identifying and resolving issues.' }
            ]
        }
    ];

    return (
        <div className='experience'>
            <div className="experience-title title">My Experience</div>
            <div className='experience-content'>
                {companies.map((company) => (
                    <div 
                        className="logo-container" 
                        key={company.id}
                        onClick={() => openModal(company.id)}
                    >
                        <div className='bulb'>
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                        <div className="pertamina-style">
                            <div className="company-name">{company.name}</div>
                            <div className="tagline">{company.tagline}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeModal && (
                <div 
                    className={`modal-overlay ${activeModal ? 'active' : ''}`} 
                    onClick={handleOverlayClick}
                >
                    <div className="modal">
                        <div className="modal-header">
                            <div className="modal-title">
                                <FontAwesomeIcon icon={faListCheck} />
                                <span>Description</span>
                            </div>
                            <button className="close-button" onClick={closeModal}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="modal-content">
                            <ul className="point-list">
                                {companies.find(company => company.id === activeModal).points.map((point, index) => (
                                    <li className="point-item" key={index}>
                                        <FontAwesomeIcon icon={point.icon} />
                                        <span>{point.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;