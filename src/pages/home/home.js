import { useState, useEffect } from 'react';
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEnvelope, faContactBook } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [activeModal, setActiveModal] = useState(false);

    // Open modal with specific company ID
    const openModal = () => {
        setActiveModal(true);
    };

    // Close modal
    const closeModal = () => {
        setActiveModal(false);
    };

    // Close modal when clicking outside
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay-home')) {
            closeModal();
        }
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Hello, I'm <span>Irhash</span></h1>
                <p>Electrical Engineer</p>
                <p>Power System, Automation, Project Management</p>
                <a onClick={openModal} className="cta-button">Hubungi Saya</a>
            </div>

            <div className="lightning"></div>
            {activeModal && (
                <div
                    className={`modal-overlay-home ${activeModal ? 'active' : ''}`}
                    onClick={handleOverlayClick}
                >
                    <div className="modal-home">
                        <div className="modal-header-home">
                            <div className="modal-title-home">
                                <FontAwesomeIcon icon={faContactBook} />
                                <span>Contact</span>
                            </div>
                            <button className="close-button-home" onClick={closeModal}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="modal-content-home">
                            <div className="modal-ch-home">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:irhashdm@gmail.com">irhashdm@gmail.com</a>
                            </div>
                            <div className="modal-ch-home">
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <a href="https://wa.me/6285899988797">+62 8589-9988-797</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default (Home)