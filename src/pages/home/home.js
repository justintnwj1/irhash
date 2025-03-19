import { useState, useEffect } from 'react';
import "./home.css";
import spi from "../../assets/spi.jpg";
const Home = () => {

    const [activeModal, setActiveModal] = useState(null);
    const handleDetails = () => {
        setActiveModal(true);

        // Menghilangkan modal setelah 2 detik
        setTimeout(() => {
            setActiveModal(false);
        }, 2000);
    };
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Hello, I'm <span>Irhash</span></h1>
                <p>Electrical engineer with a strong focus on Power system analysis and automation systems. With experiences in both industrial plant and coal mining environments, I bring a proven track record of developing and optimizing electrical systems. Skilled in ETAP, PLC, and Project Management.</p>
                <a href="#contact" className="cta-button"  onClick={handleDetails}>Hubungi Saya</a>
            </div>
            <div className="lightning"></div>
            {activeModal && (
                <div
                    className={`modal-overlay-projects1 ${activeModal ? 'active' : ''}`}
                >
                    <div className="lightning1"></div>
                    <img src={spi} className='asde' alt= "asd"/>
                </div>
            )}
        </div>
    )
}

export default (Home)